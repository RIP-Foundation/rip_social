# DevOps Guide

> Git strategy, CI/CD pipelines, and deployment workflows for **RIP Social**.

---

## Git Strategy: GitHub Flow

We use **GitHub Flow** — simple, effective, and perfect for continuous deployment.

### Branch Structure

```
main                    ← Production-ready (protected)
  │
  └── feature/*         ← All development work
      ├── feature/auth-aadhaar
      ├── feature/ai-moderation
      ├── fix/login-bug
      └── docs/update-readme
```

### Branch Naming

| Prefix | Purpose | Example |
|:-------|:--------|:--------|
| `feature/` | New features | `feature/petition-system` |
| `fix/` | Bug fixes | `fix/mobile-nav-bug` |
| `docs/` | Documentation | `docs/api-guide` |
| `chore/` | Maintenance | `chore/update-deps` |
| `refactor/` | Code refactoring | `refactor/auth-module` |

### Workflow

```
1. Create branch from main
   git checkout -b feature/my-feature

2. Make commits (conventional commits)
   git commit -m "feat(api): add petition endpoint"

3. Push and open PR
   git push origin feature/my-feature

4. CI runs automatically
   ├── Lint
   ├── Type check
   └── Tests

5. Code review by maintainer

6. Squash merge into main

7. Auto-deploy to staging/production
```

---

## Branch Protection Rules

Apply these to the `main` branch:

```yaml
✅ Require pull request reviews (1+ reviewer)
✅ Require status checks to pass
✅ Require linear history (squash merges)
✅ Require signed commits (recommended)
❌ Allow force pushes (never)
❌ Allow deletions (never)
```

---

## CI/CD Pipeline

### On Pull Request

```yaml
name: CI

on:
  pull_request:
    branches: [main]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      
      - name: Install dependencies
        run: bun install
      
      - name: Lint
        run: bun lint
      
      - name: Type check
        run: bun typecheck
      
      - name: Test
        run: bun test
      
      - name: Build
        run: bun run build
```

### On Merge to Main

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Build Docker images
        run: docker build -t ripsocial-api ./apps/api
      
      - name: Push to ECR
        run: |
          aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_URL
          docker push $ECR_URL/ripsocial-api:latest
      
      - name: Deploy to ECS
        run: aws ecs update-service --cluster prod --service api --force-new-deployment
```

---

## Environments

| Environment | Trigger | Purpose |
|:------------|:--------|:--------|
| **Local** | `bun dev` | Development |
| **Staging** | Merge to `main` | Pre-production testing |
| **Production** | Manual approval / tag | Live users |

---

## AI Model Management

### Model Versioning with DVC

Models are large files — we use **DVC** (Data Version Control) instead of Git:

```bash
# Track model with DVC
dvc add models/llama-guard.safetensors

# Git tracks the pointer file
git add models/llama-guard.safetensors.dvc

# Push model to remote storage (S3)
dvc push
```

### Model Deployment Pipeline

```
Model training/fine-tuning (offline)
           ↓
Upload to S3 / HuggingFace
           ↓
Update model config in code
           ↓
PR → Review → Merge
           ↓
Deploy to SageMaker/EC2
           ↓
Canary rollout (gradual)
```

### Model Config Structure

```typescript
// packages/ai/config/models.ts
export const models = {
  textModeration: {
    name: "llama-guard-3-8b",
    version: "1.0.0",
    endpoint: process.env.LLAMA_GUARD_ENDPOINT,
  },
  imageModeration: {
    name: "nudenet",
    version: "3.0.0",
    endpoint: process.env.NUDENET_ENDPOINT,
  },
};
```

---

## Infrastructure as Code

We use **AWS CDK** for infrastructure:

```
infrastructure/
├── cdk/
│   ├── lib/
│   │   ├── api-stack.ts      # ECS Fargate
│   │   ├── db-stack.ts       # RDS, ElastiCache
│   │   ├── ai-stack.ts       # SageMaker endpoints
│   │   └── cdn-stack.ts      # CloudFront
│   └── bin/
│       └── app.ts
└── docker/
    ├── api.Dockerfile
    └── web.Dockerfile
```

---

## Monitoring & Observability

| Tool | Purpose |
|:-----|:--------|
| **CloudWatch** | Logs, metrics, alarms |
| **Sentry** | Error tracking |
| **AWS X-Ray** | Distributed tracing |

### Key Metrics to Monitor

- API response times (p50, p95, p99)
- Error rates
- AI model inference latency
- Database connection pool
- Redis cache hit rate

---

## Secrets Management

All secrets stored in **AWS Secrets Manager**:

| Secret | Description |
|:-------|:------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis connection string |
| `AADHAAR_API_KEY` | UIDAI API credentials |
| `DIGILOCKER_API_KEY` | DigiLocker credentials |
| `TWILIO_AUTH_TOKEN` | SMS OTP service |

**Never commit secrets to Git!**

---

## Release Process

### Semantic Versioning

```
v1.0.0
 │ │ │
 │ │ └── Patch (bug fixes)
 │ └──── Minor (new features, backward compatible)
 └────── Major (breaking changes)
```

### Creating a Release

```bash
# Tag the release
git tag -a v1.0.0 -m "Release: MVP launch"
git push origin v1.0.0

# GitHub Actions triggers production deploy
```

---

## Quick Reference

| Command | Purpose |
|:--------|:--------|
| `bun install` | Install dependencies |
| `bun dev` | Start dev server |
| `bun test` | Run tests |
| `bun lint` | Lint code |
| `bun typecheck` | Type check |
| `bun build` | Production build |
| `dvc push` | Push models to S3 |

---

## Related Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md) — System architecture
- [CONTRIBUTING.md](CONTRIBUTING.md) — Contribution guidelines
