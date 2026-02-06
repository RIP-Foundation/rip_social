# Contributing to rip social

First off, thank you for considering contributing to rip social! It's people like you who make this civic engagement platform a reality.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [conduct@ripsocial.org](mailto:conduct@ripsocial.org).

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) v1.0+ (primary runtime and package manager)
- [Node.js](https://nodejs.org/) v20+ (for some tooling)
- [Docker](https://www.docker.com/) (for local services)
- [PostgreSQL](https://www.postgresql.org/) 15+ (or use Docker)

### Development Setup

1. **Fork the repository**

   Click the "Fork" button on GitHub to create your own copy.

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/rip_social.git
   cd rip_social
   ```

3. **Install dependencies**

   ```bash
   bun install
   ```

4. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in the required values (see [Environment Variables](#environment-variables)).

5. **Start local services**

   ```bash
   docker compose up -d
   ```

6. **Run database migrations**

   ```bash
   bun run db:migrate
   ```

7. **Start the development server**

   ```bash
   bun dev
   ```

### Environment Variables

| Variable | Description | Required |
|:---------|:------------|:---------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `REDIS_URL` | Redis connection string | Yes |
| `NEXTAUTH_SECRET` | NextAuth.js secret key | Yes |
| `NEXTAUTH_URL` | Application URL | Yes |
| `AWS_ACCESS_KEY_ID` | AWS access key | For S3/AI |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key | For S3/AI |
| `TWILIO_ACCOUNT_SID` | Twilio account SID | For SMS |
| `TWILIO_AUTH_TOKEN` | Twilio auth token | For SMS |

## How to Contribute

### Reporting Bugs

Before creating a bug report, please check existing issues to avoid duplicates.

When creating a bug report, include:

- **Clear title** describing the issue
- **Steps to reproduce** the behavior
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Environment details** (OS, browser, versions)

Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md).

### Suggesting Features

We welcome feature suggestions! Please:

- Check if the feature has already been suggested
- Provide a clear use case
- Explain how it aligns with our [Core Principles](README.md#core-principles)

Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md).

### Your First Contribution

Look for issues labeled:

- `good first issue` - Simple issues for newcomers
- `help wanted` - Issues where we need community help
- `documentation` - Documentation improvements

### Working on Issues

1. Comment on the issue to claim it
2. Wait for a maintainer to assign it to you
3. Create a branch from `main`
4. Make your changes
5. Submit a pull request

## Pull Request Process

### Before Submitting

- [ ] Code follows our [Style Guidelines](#style-guidelines)
- [ ] All tests pass (`bun test`)
- [ ] Linting passes (`bun lint`)
- [ ] Types check (`bun typecheck`)
- [ ] Documentation is updated if needed
- [ ] Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/)

### Commit Message Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(api): add petition signature endpoint
fix(web): resolve mobile navigation bug
docs: update contributing guidelines
```

### Review Process

1. Create a pull request against `main`
2. Fill out the PR template completely
3. Request review from maintainers
4. Address feedback and make changes
5. Once approved, a maintainer will merge

### Branch Naming

Use descriptive branch names:

```
feature/petition-signatures
fix/mobile-nav-bug
docs/api-documentation
chore/update-dependencies
```

## Style Guidelines

### TypeScript

- Use strict TypeScript (`strict: true`)
- Prefer `interface` over `type` for object shapes
- Use explicit return types for functions
- Avoid `any` - use `unknown` if type is truly unknown

### Code Formatting

We use [Biome](https://biomejs.dev/) for formatting and linting:

```bash
# Format code
bun format

# Lint code
bun lint

# Fix auto-fixable issues
bun lint:fix
```

### File Organization

- One component/function per file
- Group related files in directories
- Use barrel exports (`index.ts`) for public APIs
- Keep files under 300 lines when possible

### Testing

- Write tests for new features
- Maintain existing test coverage
- Use descriptive test names
- Test edge cases and error conditions

```bash
# Run all tests
bun test

# Run tests in watch mode
bun test --watch

# Run specific test file
bun test path/to/test.ts
```

## Project Structure

```
apps/
├── web/          # Next.js frontend
└── api/          # Hono backend

packages/
├── db/           # Database schema & migrations
├── ai/           # AI moderation services
├── ui/           # Shared UI components
├── types/        # Shared TypeScript types
└── config/       # Shared configurations
```

## Community

### Getting Help

- [GitHub Discussions](https://github.com/akshayaparida/rip_social/discussions) - Questions and ideas
- [Discord](https://discord.gg/ripsocial) - Real-time chat (coming soon)

### Stay Updated

- Watch the repository for updates
- Follow [@ripsocial](https://twitter.com/ripsocial) on Twitter (coming soon)

## Recognition

Contributors are recognized in:

- [CONTRIBUTORS.md](CONTRIBUTORS.md)
- Release notes
- Project documentation

---

Thank you for contributing to rip social! Together, we're building a better internet.
