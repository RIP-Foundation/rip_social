<p align="center">
  <h1 align="center">rip social</h1>
  <p align="center"><strong>Real Identity. Real Issues. Real Solutions.</strong></p>
  <p align="center">An open-source civic engagement platform where verified citizens discuss real issues, moderated by AI, with direct routes to government action.</p>
</p>

<p align="center">
  <a href="#the-problem">Problem</a> •
  <a href="#our-solution">Solution</a> •
  <a href="#how-it-works">How It Works</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#contributing">Contributing</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-planning-yellow?style=flat-square" alt="Status: Planning" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License: MIT" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" alt="PRs Welcome" />
</p>

---

## The Problem

Social media today is fundamentally broken:

- **Anonymous accounts** enable abuse without accountability
- **Heated discussions** lead to bans instead of resolution
- **Real issues** get drowned in noise and outrage
- **No bridge** between public discourse and government action
- **Echo chambers** prevent meaningful dialogue

## Our Solution

**RIP Social** is a civic engagement platform where:

1. **Real people** discuss **real issues** with verified identities
2. **AI moderates** content pre-publish — no nudity, abuse, or spam ever reaches the platform
3. **Solutions emerge** from community discussion, summarized by AI
4. **Authorities receive** structured, actionable petitions with verified citizen signatures

## Core Principles

| Principle | Implementation |
|:----------|:---------------|
| **No Anonymity** | Phone/ID verification required |
| **No Blocking** | Reputation system instead of bans |
| **No Abuse** | AI pre-filters all content before posting |
| **Full Transparency** | All threads are evidence, permanently archived |
| **Civic Action** | Issues route to relevant government authorities |

## How It Works

```
User posts issue → AI validates (no abuse/spam) → Community discusses
                                                         ↓
                                        AI summarizes actionable solution
                                                         ↓
                                    Routes to relevant Govt/Authority
                                                         ↓
                                    Public tracking until resolved
```

### Issue Routing

| Category | Routes To |
|:---------|:----------|
| Infrastructure | Municipal Corp, PWD |
| Crime/Safety | Police, Cyber Cell |
| Education | State Education Dept |
| Environment | Pollution Board |
| Corruption | Vigilance, Lokayukta |
| Consumer | Consumer Forum |

## AI Moderation Layer

Content passes through AI **before** publishing with zero tolerance:

| Layer | Technology | Purpose |
|:------|:-----------|:--------|
| **Vision Models** | NudeNet, CLIP | Detect and block nudity/NSFW |
| **Text Models** | Llama Guard, Detoxify | Block abuse, threats, hate speech |
| **Spam Detection** | Rate limiting + pattern analysis | Block spam and bot activity |

> **Zero tolerance** — blocked content never reaches the platform.

## Legal Framework & Government Integration

### Why Government Must Respond

RIP Social ensures petitions carry **legal weight** through official channels:

| Channel | Description | Legal Standing |
|:--------|:------------|:---------------|
| **CPGRAMS** | Central govt grievance portal - mandatory 30-day response | Official |
| **State Portals** | CM Helpline, Samadhan, IGRS portals | Official |
| **RTI Act 2005** | Right to Information - govt must respond in 30 days | Legal Right |
| **Aadhaar eSign** | Digital signatures legally valid under IT Act 2000 | Legally Binding |
| **PIL Route** | Public Interest Litigation for systemic issues | Court Enforceable |

### Petition Flow

```
Issue reaches threshold (verified signatures)
            ↓
    AI generates formal petition
            ↓
    Users eSign via Aadhaar (legally binding)
            ↓
    Auto-submit to official portals (CPGRAMS, State)
            ↓
    Complaint number issued → Public tracking
            ↓
    CC to MP/MLA + Media partners
            ↓
    RTI filed if no response in 30 days
            ↓
    PIL escalation for ignored systemic issues
```

### Integration Points

| System | Integration Method |
|:-------|:-------------------|
| **CPGRAMS** | API / Automated form submission |
| **State Portals** | API where available, else RPA |
| **Aadhaar eSign** | UIDAI eSign API (legally valid) |
| **DigiLocker** | Identity verification |
| **RTI Online** | Auto-generate RTI applications |
| **MP/MLA Directory** | Auto-email to elected representatives |

### Legal Compliance

- **IT Act 2000**: Digital signatures are legally valid
- **RTI Act 2005**: Citizens' right to government information
- **Grievance Redressal**: CPGRAMS mandates 30-day response
- **Data Protection**: Compliant with DPDP Act 2023
- **Evidence Preservation**: All threads timestamped and archived

## Tech Stack

### Frontend

| Layer | Technology | Purpose |
|:------|:-----------|:--------|
| Web App | **Next.js 15** (TypeScript) | Server-side rendering, SEO |
| Mobile | **PWA + Capacitor** | Cross-platform mobile apps |
| UI | **Tailwind CSS + shadcn/ui** | Modern, accessible components |
| State | **Zustand + TanStack Query** | Client state & data fetching |

### Backend

| Layer | Technology | Purpose |
|:------|:-----------|:--------|
| Runtime | **Bun** | Ultra-fast JavaScript runtime |
| Framework | **Hono / Elysia** | High-performance API framework |
| API | **tRPC** | End-to-end type safety |
| Real-time | **WebSockets** | Live updates & notifications |

### AI & Moderation

| Layer | Technology | Purpose |
|:------|:-----------|:--------|
| LLM | **Llama 3.1** (self-hosted) | Content summarization |
| Content Safety | **Llama Guard 3** | Text abuse detection |
| Image Safety | **NudeNet + CLIP** | NSFW image detection |
| Hosting | **AWS SageMaker / EC2** | GPU inference |

### Database & Storage

| Layer | Technology | Purpose |
|:------|:-----------|:--------|
| Primary DB | **PostgreSQL** (AWS RDS) | Relational data |
| Cache | **Redis** (AWS ElastiCache) | Session, rate limiting |
| Search | **OpenSearch** (AWS) | Full-text search |
| File Storage | **AWS S3** | Media uploads |
| CDN | **AWS CloudFront** | Global content delivery |

### AWS Infrastructure

| Service | Purpose |
|:--------|:--------|
| **ECS Fargate** | Containerized backend deployment |
| **Lambda** | Serverless functions (webhooks, cron) |
| **API Gateway** | API management & throttling |
| **Cognito** | User authentication |
| **SNS + SES** | Push notifications & email |
| **CloudWatch** | Monitoring & logging |
| **WAF** | Security & DDoS protection |

### Identity & Security

| Layer | Technology | Purpose |
|:------|:-----------|:--------|
| Auth | **AWS Cognito + NextAuth** | Secure authentication |
| Phone Verify | **AWS SNS / Twilio** | OTP verification |
| ID Verify | **DigiLocker API** (India) | Aadhaar/PAN verification |
| Encryption | **AWS KMS** | Data encryption at rest |

## Project Structure

This project uses a **Turborepo** monorepo with **Bun** as the package manager for optimal performance and type safety across all packages.

```
rip_social/
├── apps/
│   ├── web/                  # Next.js 15 frontend
│   │   ├── src/
│   │   │   ├── app/          # App router pages
│   │   │   ├── components/   # React components
│   │   │   └── lib/          # Utilities & hooks
│   │   └── package.json
│   │
│   └── api/                  # Hono backend (Bun runtime)
│       ├── src/
│       │   ├── routes/       # API routes
│       │   ├── services/     # Business logic
│       │   └── middleware/   # Auth, rate limiting
│       └── package.json
│
├── packages/
│   ├── db/                   # Drizzle ORM
│   │   ├── schema/           # Database schema
│   │   ├── migrations/       # SQL migrations
│   │   └── seed/             # Seed data
│   │
│   ├── ai/                   # AI moderation services
│   │   ├── moderation/       # Content filtering
│   │   ├── summarization/    # Thread summarization
│   │   └── routing/          # Issue classification
│   │
│   ├── ui/                   # Shared UI components
│   │   └── components/       # shadcn/ui components
│   │
│   ├── types/                # Shared TypeScript types
│   │   └── src/              # Type definitions
│   │
│   └── config/               # Shared configurations
│       ├── eslint/           # ESLint config
│       ├── typescript/       # TSConfig base
│       └── tailwind/         # Tailwind config
│
├── infrastructure/           # AWS CDK / Terraform
│   ├── cdk/                  # AWS CDK stacks
│   └── docker/               # Docker configurations
│
├── docs/                     # Documentation
├── turbo.json                # Turborepo configuration
├── package.json              # Root package.json
└── bun.lockb                 # Bun lockfile
```

### Why Turborepo + Bun?

| Benefit | Description |
|:--------|:------------|
| **End-to-end type safety** | Share types between frontend & backend via tRPC |
| **Cached builds** | Only rebuilds what changed, significantly faster CI/CD |
| **Bun performance** | Ultra-fast installs and runtime for the API |
| **Atomic deploys** | Single PR updates both frontend and backend together |
| **Shared packages** | Reuse UI components, configs, and utilities |

## Getting Started

> **Note**: This project is currently in the planning phase.

```bash
# Clone the repository
git clone https://github.com/akshayaparida/rip_social.git
cd rip_social

# Install dependencies (coming soon)
bun install

# Start development server (coming soon)
bun dev
```

## Contributing

This project is **100% Open Source** and welcomes contributions!

### Ways to Contribute

- **Report bugs** and issues
- **Suggest features** and improvements
- **Submit pull requests** with code changes
- **Improve documentation**
- **Audit algorithms** to ensure AI neutrality

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Open Source & Funding

- **Fully open source** (MIT License)
- Run on **community donations** and minimal, ethical ads
- **No data selling** — ever
- **Transparent governance** with community oversight

## Roadmap

- [ ] **Phase 1: Foundation** (Current)
  - [ ] Monorepo setup (Turborepo + Bun)
  - [ ] Database schema design (Postgres + Drizzle)
  - [ ] Auth & Identity verification prototypes

- [ ] **Phase 2: MVP**
  - [ ] AI Moderation Pipeline (Llama Guard + NudeNet)
  - [ ] Basic Issue Posting & Commenting
  - [ ] Government Agency Directory

- [ ] **Phase 3: Beta**
  - [ ] Petition Generation Engine
  - [ ] Aadhaar eSign Integration
  - [ ] Public Beta Launch

## Community & Governance

We believe in open, transparent governance.

- **[Code of Conduct](CODE_OF_CONDUCT.md)** - Our standards for participation
- **[Contributing Guide](CONTRIBUTING.md)** - How to get started
- **[Security Policy](SECURITY.md)** - How to report vulnerabilities
- **[Governance](GOVERNANCE.md)** - How decisions are made

## License

This project is licensed under the **MIT License** — free for everyone.

See [LICENSE](LICENSE) for more details.

---

<p align="center">
  <strong>Currently in planning phase</strong>
</p>

<p align="center">
  Created by <a href="https://akshayaparida.com">Akshaya Parida</a>
</p>

<p align="center">
  <sub>Building a better internet, one verified conversation at a time.</sub>
</p>