# Architecture Overview

> System architecture for **RIP Social** — a civic engagement platform.

---

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENTS                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │   Web App   │  │   PWA/iOS   │  │   Android (Capacitor)   │  │
│  │  (Next.js)  │  │             │  │                         │  │
│  └──────┬──────┘  └──────┬──────┘  └────────────┬────────────┘  │
└─────────┼────────────────┼──────────────────────┼───────────────┘
          │                │                      │
          └────────────────┼──────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      AWS CLOUDFRONT (CDN)                        │
└──────────────────────────────┬──────────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API GATEWAY / LOAD BALANCER                 │
└──────────────────────────────┬──────────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                      APPLICATION LAYER                           │
│                                                                  │
│  ┌──────────────────────┐    ┌──────────────────────────────┐   │
│  │   Hono API (Bun)     │    │   AI Moderation Service      │   │
│  │   - tRPC endpoints   │◄──▶│   - Text filtering           │   │
│  │   - Auth/Sessions    │    │   - Image filtering          │   │
│  │   - Business logic   │    │   - Content summarization    │   │
│  └──────────┬───────────┘    └──────────────────────────────┘   │
└─────────────┼───────────────────────────────────────────────────┘
              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      DATA LAYER                                  │
│                                                                  │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌───────────┐  │
│  │ PostgreSQL │  │   Redis    │  │ OpenSearch │  │    S3     │  │
│  │   (RDS)    │  │(ElastiCache│  │  (Search)  │  │  (Files)  │  │
│  └────────────┘  └────────────┘  └────────────┘  └───────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Core Components

### 1. Frontend (`apps/web`)

| Technology | Purpose |
|:-----------|:--------|
| Next.js 15 | Server-side rendering, App Router |
| TypeScript | Type safety |
| Tailwind + shadcn/ui | Styling and components |
| Zustand | Client state management |
| TanStack Query | Server state & caching |
| tRPC Client | Type-safe API calls |

### 2. Backend (`apps/api`)

| Technology | Purpose |
|:-----------|:--------|
| Bun | Runtime (faster than Node.js) |
| Hono / Elysia | HTTP framework |
| tRPC | End-to-end type safety |
| Drizzle ORM | Database queries |
| WebSockets | Real-time updates |

### 3. AI Services (`packages/ai`)

| Model | Purpose |
|:------|:--------|
| Llama Guard 3 | Text content moderation |
| NudeNet + CLIP | Image/NSFW detection |
| Llama 3.1 | Content summarization |

### 4. Database (`packages/db`)

| Store | Purpose |
|:------|:--------|
| PostgreSQL | Primary relational data |
| Redis | Sessions, rate limiting, cache |
| OpenSearch | Full-text search |
| S3 | Media files, model artifacts |

---

## Identity & Verification Flow (India)

```
User Registration
       ↓
Phone OTP Verification (AWS SNS)
       ↓
Aadhaar eKYC / DigiLocker Verification
       ↓
Account Created (Verified Citizen)
       ↓
Can post issues, sign petitions
```

---

## Content Moderation Pipeline

```
User submits content
       ↓
┌──────────────────────────────────────┐
│  PRE-PUBLISH AI CHECK                │
│  ├─ Text: Llama Guard (abuse/spam)   │
│  └─ Image: NudeNet + CLIP (NSFW)     │
└──────────────────────────────────────┘
       ↓
    PASS? ──No──▶ Block + notify user
       │
      Yes
       ↓
Content published
       ↓
Community can report (secondary check)
```

---

## Government Integration Points

| System | Method | Purpose |
|:-------|:-------|:--------|
| CPGRAMS | API / RPA | Central govt grievances |
| State Portals | API / RPA | State-level complaints |
| Aadhaar eSign | UIDAI API | Legally binding signatures |
| DigiLocker | API | Identity verification |
| RTI Online | Automation | File RTI if no response |

---

## Security Architecture

| Layer | Protection |
|:------|:-----------|
| Edge | AWS WAF, CloudFront DDoS protection |
| API | Rate limiting, JWT auth |
| Data | Encryption at rest (KMS), TLS in transit |
| Secrets | AWS Secrets Manager |
| Identity | Aadhaar-verified only |

---

## Related Documentation

- [DEVOPS.md](DEVOPS.md) — Git strategy, CI/CD, deployment
- [CONTRIBUTING.md](CONTRIBUTING.md) — How to contribute
- [SECURITY.md](SECURITY.md) — Security policies
