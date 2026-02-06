import { pgTable, uuid, varchar, boolean, integer, timestamp, pgEnum } from "drizzle-orm/pg-core";

/**
 * User roles enum
 * - citizen: Verified citizen, can post issues and sign petitions
 * - moderator: Can review flagged content
 * - admin: Full platform access
 */
export const userRoles = pgEnum("user_role", ["citizen", "moderator", "admin"]);

/**
 * Users table - Verified citizens only
 */
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  phone: varchar("phone", { length: 20 }).unique().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  role: userRoles("role").default("citizen").notNull(),
  isVerified: boolean("is_verified").default(false).notNull(),
  aadhaarVerified: boolean("aadhaar_verified").default(false).notNull(),
  reputationScore: integer("reputation_score").default(100).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
