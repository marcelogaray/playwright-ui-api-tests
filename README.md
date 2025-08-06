# 🧪 QA Automation Framework: UI + API + AI

This repository is part of the research project **“Intelligent Automation Tools in QA”**, focused on integrating AI-assisted capabilities into modern testing frameworks using technologies like **Playwright**, **GitHub Copilot**, **MCP Server**, and **Claude (Anthropic)**.

## 🎯 Project Objective

To design and maintain a **unified automation testing framework** for both UI and API that leverages AI tools to:

- Generate test scripts from natural language requirements.
- Perform end-to-end testing with session sharing and parallel execution.
- Integrate with CI/CD pipelines and Jira-based task tracking.

## 🧩 Technology Stack

- ✅ [Playwright](https://playwright.dev/) — Unified testing framework for UI and API.
- ✅ [GitHub Copilot](https://github.com/features/copilot) — AI code assistant.
- ✅ MCP Server — Multi-client support for Playwright sessions.
- ✅ [QA Touch](https://www.qatouch.com/) — Test case management and reporting.
- ✅ [Jira](https://www.atlassian.com/software/jira) — Task and issue tracking.
- ✅ GitHub Actions / Jenkins — Continuous integration and delivery.

## 🧠 Architecture Overview


## ⚙️ Framework Features

- Unified testing: combine API and UI validation in one flow.
- Support for JWT tokens and custom headers for authenticated scenarios.
- Automatic tracing, logging, and screenshot capturing.
- Modular and scalable structure for continuous testing.
- AI-powered test case prioritization and redundancy reduction.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run UI tests
npx playwright test ui/

# Run API tests
npx playwright test api/

# Run full E2E test suite with MCP support
npm run test:e2e
