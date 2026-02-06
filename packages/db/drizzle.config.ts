import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema/index.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgres://ripsocial:ripsocial_dev@localhost:5432/ripsocial",
  },
} satisfies Config;
