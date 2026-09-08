import { registerHooks } from "node:module";

// Resolve the app's extensionless TypeScript imports for Node's test runner.
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (context.parentURL?.includes("/lib/") && specifier.startsWith("./") && !specifier.split("/").at(-1).includes(".")) {
      return nextResolve(`${specifier}.ts`, context);
    }
    return nextResolve(specifier, context);
  },
});
