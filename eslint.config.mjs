import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([
    ".next/**",
    ".next-analytics-preview/**",
    ".open-next/**",
    ".wrangler/**",
    "design-mockups/**",
    "next-env.d.ts",
  ]),
]);
