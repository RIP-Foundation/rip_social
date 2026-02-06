import { describe, it, expect } from "vitest";
import { users, userRoles } from "../src/schema/users";
import { issues, issueStatus, issueCategory } from "../src/schema/issues";
import { getTableColumns } from "drizzle-orm";

/**
 * TDD: Schema validation tests
 * These tests define the expected structure BEFORE implementation
 */

describe("User Schema", () => {
  it("should have all required user columns", () => {
    const columns = getTableColumns(users);

    // Required columns
    expect(columns).toHaveProperty("id");
    expect(columns).toHaveProperty("email");
    expect(columns).toHaveProperty("phone");
    expect(columns).toHaveProperty("name");
    expect(columns).toHaveProperty("role");
    expect(columns).toHaveProperty("isVerified");
    expect(columns).toHaveProperty("aadhaarVerified");
    expect(columns).toHaveProperty("reputationScore");
    expect(columns).toHaveProperty("createdAt");
    expect(columns).toHaveProperty("updatedAt");
  });

  it("should have correct user role enum values", () => {
    expect(userRoles.enumValues).toContain("citizen");
    expect(userRoles.enumValues).toContain("moderator");
    expect(userRoles.enumValues).toContain("admin");
  });
});

describe("Issue Schema", () => {
  it("should have all required issue columns", () => {
    const columns = getTableColumns(issues);

    // Required columns
    expect(columns).toHaveProperty("id");
    expect(columns).toHaveProperty("title");
    expect(columns).toHaveProperty("description");
    expect(columns).toHaveProperty("category");
    expect(columns).toHaveProperty("status");
    expect(columns).toHaveProperty("authorId");
    expect(columns).toHaveProperty("location");
    expect(columns).toHaveProperty("signatureCount");
    expect(columns).toHaveProperty("aiSummary");
    expect(columns).toHaveProperty("routedTo");
    expect(columns).toHaveProperty("createdAt");
    expect(columns).toHaveProperty("updatedAt");
  });

  it("should have correct issue status enum values", () => {
    expect(issueStatus.enumValues).toContain("draft");
    expect(issueStatus.enumValues).toContain("under_review");
    expect(issueStatus.enumValues).toContain("published");
    expect(issueStatus.enumValues).toContain("petitioned");
    expect(issueStatus.enumValues).toContain("routed");
    expect(issueStatus.enumValues).toContain("resolved");
    expect(issueStatus.enumValues).toContain("closed");
  });

  it("should have correct issue category enum values", () => {
    expect(issueCategory.enumValues).toContain("infrastructure");
    expect(issueCategory.enumValues).toContain("crime_safety");
    expect(issueCategory.enumValues).toContain("education");
    expect(issueCategory.enumValues).toContain("environment");
    expect(issueCategory.enumValues).toContain("corruption");
    expect(issueCategory.enumValues).toContain("consumer");
    expect(issueCategory.enumValues).toContain("healthcare");
    expect(issueCategory.enumValues).toContain("other");
  });
});
