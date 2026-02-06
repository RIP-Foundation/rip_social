import { pgTable, uuid, varchar, text, integer, timestamp, pgEnum, jsonb } from "drizzle-orm/pg-core";
import { users } from "./users";

/**
 * Issue status enum - lifecycle of an issue
 */
export const issueStatus = pgEnum("issue_status", [
  "draft",
  "under_review",
  "published",
  "petitioned",
  "routed",
  "resolved",
  "closed",
]);

/**
 * Issue category enum - determines routing
 */
export const issueCategory = pgEnum("issue_category", [
  "infrastructure",
  "crime_safety",
  "education",
  "environment",
  "corruption",
  "consumer",
  "healthcare",
  "other",
]);

/**
 * Issues table - Core civic issue tracking
 */
export const issues = pgTable("issues", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 500 }).notNull(),
  description: text("description").notNull(),
  category: issueCategory("category").notNull(),
  status: issueStatus("status").default("draft").notNull(),
  authorId: uuid("author_id")
    .references(() => users.id)
    .notNull(),
  location: varchar("location", { length: 500 }),
  signatureCount: integer("signature_count").default(0).notNull(),
  aiSummary: text("ai_summary"),
  routedTo: jsonb("routed_to").$type<string[]>(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type Issue = typeof issues.$inferSelect;
export type NewIssue = typeof issues.$inferInsert;
