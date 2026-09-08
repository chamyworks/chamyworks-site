import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = mkdtempSync(join(tmpdir(), "chamyworks-ga4-qa-"));
const head = execFileSync("git", ["rev-parse", "HEAD"], { cwd: root, encoding: "utf8" }).trim();
const archive = execFileSync("git", ["archive", "HEAD"], { cwd: root, maxBuffer: 200 * 1024 * 1024 });
execFileSync("tar", ["-xf", "-", "-C", source], { input: archive });
const selected = [
  "app/(en)/layout.tsx", "app/(ko)/layout.tsx", "app/(ko)/apps/[appSlug]/page.tsx",
  "app/(ko)/privacy/page.tsx", "components/happypick-preview.tsx",
  "components/site-analytics.tsx", "components/site-footer.tsx", "content/website-privacy.ts",
  "lib/site-release.ts", "lib/site-analytics.ts", "next.config.ts",
];
for (const file of selected) {
  mkdirSync(dirname(join(source, file)), { recursive: true });
  cpSync(join(root, file), join(source, file));
}
function replace(file, before, after) {
  const path = join(source, file);
  const text = readFileSync(path, "utf8");
  if (!text.includes(before)) throw new Error(`QA transform no longer matches: ${file}`);
  writeFileSync(path, text.replaceAll(before, after));
}
// Only this temporary copy grants live execution, for exactly the protected QA host.
replace("lib/site-release.ts", "WEBSITE_PRIVACY_APPROVED = false", "WEBSITE_PRIVACY_APPROVED = true");
replace("lib/site-release.ts", "ANALYTICS_ACTIVATION_APPROVED = false", "ANALYTICS_ACTIVATION_APPROVED = true");
replace("lib/site-analytics.ts", "chamyworks.analytics-consent.v1", "chamyworks.analytics-consent.qa.v1");
replace("lib/site-analytics.ts", "chamyworks.com", "qa-analytics.chamyworks.com");
replace("lib/site-analytics.ts", 'cookie_domain: "qa-analytics.chamyworks.com",', 'cookie_domain: "none",\n        debug_mode: true,');
// This is a scoped verification candidate; unrelated pending game changes stay out.
cpSync(join(root, "node_modules"), join(source, "node_modules"), { recursive: true, verbatimSymlinks: true });
const env = { ...process.env, NEXT_PUBLIC_SITE_ANALYTICS_MODE: "live", NEXT_PUBLIC_WEBSITE_PRIVACY_MODE: "published", NEXT_TELEMETRY_DISABLED: "1" };
execFileSync(join(source, "node_modules/.bin/opennextjs-cloudflare"), ["build"], { cwd: source, env, stdio: "inherit" });
const output = join(root, ".open-next/qa");
mkdirSync(output, { recursive: true });
cpSync(join(source, ".open-next"), output, { recursive: true });
writeFileSync(join(output, "candidate.json"), JSON.stringify({ head, selected, source, host: "qa-analytics.chamyworks.com", builtAt: new Date().toISOString() }, null, 2));
console.log(`QA candidate prepared in ${output}. No deployment performed.`);
