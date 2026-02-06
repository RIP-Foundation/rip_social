import { describe, it, expect, beforeAll } from "vitest";
import { Hono } from "hono";

/**
 * TDD: API route tests
 * These tests define the expected API behavior BEFORE implementation
 */

describe("Health Check Route", () => {
  let app: Hono;

  beforeAll(async () => {
    // Import the app after setup
    const { createApp } = await import("../src/app");
    app = createApp();
  });

  it("should return 200 OK on /health", async () => {
    const res = await app.request("/health");
    expect(res.status).toBe(200);
  });

  it("should return JSON with status ok", async () => {
    const res = await app.request("/health");
    const json = await res.json();
    expect(json).toEqual({
      status: "ok",
      timestamp: expect.any(String),
    });
  });
});

describe("API Root", () => {
  let app: Hono;

  beforeAll(async () => {
    const { createApp } = await import("../src/app");
    app = createApp();
  });

  it("should return welcome message on /", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toHaveProperty("message");
    expect(json.message).toContain("RIP Social API");
  });

  it("should return 404 on unknown routes", async () => {
    const res = await app.request("/unknown-route-that-does-not-exist");
    expect(res.status).toBe(404);
  });
});
