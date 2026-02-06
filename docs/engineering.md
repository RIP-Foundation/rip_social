# Why This Stack? Engineering rip_social

> "Understanding the *why* behind the code."

This document explains the engineering decisions behind the **rip_social** architecture. We chose this stack for **speed**, **type safety**, and **scale**.

---

## 1. The Monorepo (Turborepo + Bun)

### Why a Monorepo?
Civic platforms have tight coupling between **Identity**, **Content**, and **Action**.
- **Shared Code**: Database schemas (`packages/db`) and UI components (`packages/ui`) are used by both the API and Web app.
- **Atomic Commits**: One PR updates the backend API and the frontend client together. No version mismatch.

### Why Bun?
**Speed.**
- **Install**: Bun installs dependencies 25x faster than npm. Crucial for CI/CD.
- **Runtime**: `apps/api` runs on Bun. It starts instantly (no cold starts) which is perfect for serverless (AWS Lambda).
- **Tooling**: Built-in test runner (`bun test`) is faster than Jest.

### Why Turborepo?
**Caching.**
- Trusted heavily by Vercel/Next.js.
- If you change only `apps/web`, Turbo *knows* not to rebuild `packages/db` or `apps/api`.
- Saves massive CI time and costs.

---

## 2. The Database (Drizzle ORM)

### Why Drizzle?
**"If you know SQL, you know Drizzle."**
- **Lightweight**: Zero runtime overhead (unlike Prisma).
- **Edge Compatible**: Runs perfectly on edge/serverless functions.
- **Transparent**: You write SQL-like code. For a civic platform, optimizing query performance is critical for scale.
- **No Code Gen**: TypeScript types are inferred directly from the schema definitions.

---

## 3. The Backend (Hono)

### Why Hono?
** Standards-based & Fast.**
- **Web Standards**: Native Request/Response objects.
- **Any Runtime**: Runs on Bun, Node, Cloudflare Workers, AWS Lambda.
- **Tiny**: <15kb.
- **RPC**: We can share API types with the frontend for end-to-end type safety without GraphQL complexity.

---

## 4. The Methodology (TDD)

### Why Test-Driven Development?
**Reliability > Speed** (initially).
- **Contract First**: We define *what* the API should return (`health.test.ts`) before writing it.
- **Refactoring Safety**: You can change the database schema later and know *exactly* what broke.
- **Documentation**: Use the tests (`__tests__`) to understand how a feature is supposed to work.

---

## 5. Directory Structure Explained

```
rip_social/
├── apps/
│   ├── api/          # The brain. Hono on Bun.
│   └── web/          # The face. Next.js 15.
├── packages/
│   ├── db/           # Single source of truth for data.
│   │   └── schema/   # Drizzle definitions.
│   └── config/       # Shared rules (linting, TS).
└── infrastructure/   # AWS CDK (Infrastructure as Code).
```

### Key Pattern: "Internal Packages"
Instead of messy `../../` imports, we treat our own code as libraries:
- Need the user schema? `import { users } from "@ripsocial/db"`
- Need standard colors? `import config from "@ripsocial/tailwind-config"`

This forces us to build **modular, reusable components** rather than a spaghetti monolith.
