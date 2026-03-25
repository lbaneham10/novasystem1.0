# Nova Systems API & MCP Registry

This file tracks the lifecycle and configuration of all APIs and MCP servers integrated into the Nova Systems automation factory. 

> [!IMPORTANT]
> **Do NOT paste actual secret keys or tokens into this file.** This file is for tracking metadata, scopes, and expiration dates only. Actual keys should stay in your `mcp_config.json` or environment variables.

---

## Active APIs & MCPs

| Service | Type | Description / Note | Scopes / Settings | Created | Expires | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **GitHub** | MCP | Antigravity MCP Agency Automation | All Repos, Admin (RW), Contents (RW), PRs (RW) | Mar 9, 2026 | Apr 8, 2026 (30 days) | ✅ Active |
| **Vercel** | API Key | `novasystemsautodeploy1` | Auto Deployments | Mar 9, 2026 | Jun 7, 2026 (90 days) | ✅ Active |
| **Google Cloud GTM** | Service Account | GTM automation ready | Tag Manager Admin | Mar 9, 2026 | Never | ✅ JSON Active |
| **Cloudflare** | API Key | Agency DNS Automation | DNS & Cloudflare API | Mar 9, 2026 | Apr 8, 2026 (30 days) | ✅ Active |
| **Stitch** | MCP | AI Design System | UI/UX Generation | Mar 9, 2026 | Apr 8, 2026 (30 days) | ✅ Active |
| **GoHighLevel** | API (Private v2) | CRM & Chatbots | All Scopes (God Mode) | Mar 9, 2026 | Never | ✅ Active |
| **Anthropic (Claude)** | API Key | Headless LLM | Copywriting Generation | Mar 10, 2026 | Never | ✅ Active |

---

## Registry Logs 
*Entries will be added here as keys are created or rotated.*

- **[Mar 9, 2026] GitHub MCP Key:** Integrated into `mcp_config.json`. Expires in 30 days.
- **[Mar 9, 2026] Google Cloud GTM:** Service Account JSON verified.
- **[Mar 9, 2026] Vercel API Key:** Integrated into `mcp_config.json`.
- **[Mar 9, 2026] Cloudflare API Key:** Integrated into `mcp_config.json`.
- **[Mar 9, 2026] Stitch MCP Key:** Integrated into `mcp_config.json`.
- **[Mar 9, 2026] GoHighLevel API:** Ready for integration.
- **[Mar 10, 2026] Anthropic API:** Ready for integration.
- **[Mar 11, 2026] Unsplash API:** Integrated into `mcp_config.json`.

---

## Maintenance Schedule
*Antigravity will use this section to remind you of upcoming expirations.*

- **Apr 1, 2026:** ⚠️ Prepare to renew GitHub MCP Token, Cloudflare API Key, & Stitch MCP.
- **Apr 8, 2026:** 🛑 GitHub MCP, Cloudflare API, & Stitch MCP Expire.
- **May 31, 2026:** ⚠️ Prepare to renew Vercel API Key.
- **Jun 7, 2026:** 🛑 Vercel API Key Expires.
