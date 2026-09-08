import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
// Revoke all signed sessions without changing production or deleting shared resources.
const result = spawnSync(resolve(root, "node_modules/.bin/wrangler"), ["secret", "put", "QA_ENDS_AT", "--config", "qa/wrangler.jsonc"], {
  cwd: root,
  input: "1970-01-01T00:00:00.000Z\n",
  stdio: ["pipe", "inherit", "inherit"],
});
process.exit(result.status ?? 1);
