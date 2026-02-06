import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";

export function createApp() {
  const app = new Hono();

  // Middleware
  app.use("*", logger());
  app.use("*", cors());
  app.use("*", prettyJSON());

  // Root route
  app.get("/", (c) => {
    return c.json({
      message: "Welcome to RIP Social API",
      version: "0.0.1",
      docs: "/api/docs",
    });
  });

  // Health check
  app.get("/health", (c) => {
    return c.json({
      status: "ok",
      timestamp: new Date().toISOString(),
    });
  });

  // 404 handler
  app.notFound((c) => {
    return c.json({ error: "Not Found" }, 404);
  });

  return app;
}
