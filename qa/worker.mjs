import app from "../.open-next/qa/worker.js";
import { authenticate, seal } from "./auth.mjs";

const worker = {
  async fetch(request, env, ctx) {
    try {
      const denied = await authenticate(request, env);
      if (denied) return denied;
      // Credentials are not forwarded into the application or its asset handling.
      const headers = new Headers(request.headers);
      headers.delete("authorization");
      headers.set("cookie", (headers.get("cookie") ?? "").split(";").filter(c => !c.trim().startsWith("__Host-chamyworks-qa=")).join(";"));
      const clean = new Request(request, { headers });
      const { QA_PASSWORD: _password, QA_SESSION_SECRET: _key, ...appEnv } = env;
      void _password; void _key;
      const asset = await env.ASSETS.fetch(clean);
      const response = asset.status === 404 ? await app.fetch(clean, appEnv, ctx) : asset;
      if (response.headers.get("content-type")?.includes("text/html")) {
        return seal(new HTMLRewriter().on("head", { element(e) { e.prepend('<script src="/__qa/diagnostics.js"></script><script src="/__qa/session.js"></script>', { html: true }); } }).transform(response));
      }
      return seal(response);
    } catch {
      return seal(new Response("QA environment unavailable", { status: 503 }));
    }
  },
};

export default worker;
