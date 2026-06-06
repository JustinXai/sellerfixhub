# SellerFixHub

Fix rejected products, feed errors, and seller violations before your next review.

SellerFixHub is an independent educational and lead-matching resource for online sellers. We help sellers understand platform issue messages, prepare evidence, and decide when to seek expert help.

**We are not affiliated with Google, TikTok, Amazon, Shopify, or any marketplace. We do not guarantee approval, reinstatement, or appeal success.**

## Tech Stack

- **Next.js 16** (App Router, TypeScript, Static Export)
- **Tailwind CSS v4**
- **Docker + Caddy** for deployment

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run validation checks
npm run validate

# Run individual checks
npm run check:claims      # Scan for forbidden claims
npm run check:content     # Validate issue data structure
npm run check:links       # Check relatedSlugs references
npm run lint              # ESLint

# Build for production
npm run build

# Start production server
npm run start
```

## Validation Commands

```bash
# Full validation (claims + content + links + lint + build)
npm run validate

# Claims check - scans all .ts/.tsx/.md/.txt files for forbidden claims
npm run check:claims

# Content check - validates all issues have required fields
npm run check:content

# Links check - validates relatedSlugs reference existing issues
npm run check:links
```

### Forbidden Claims

The following claims are **strictly prohibited** on this site:

- `guaranteed approval`
- `100% approval`
- `guaranteed reinstatement`
- `official Google partner`
- `official TikTok partner`
- `internal escalation guaranteed`
- `bypass platform rules`
- `fake invoice`
- `fake documents`
- `create a new account to bypass suspension`

These are automatically checked by `npm run check:claims`.

## Content Structure

### Adding New Issues

1. Add the issue data to `src/data/issues.ts`
2. Each issue must include all required fields (validated by `npm run check:content`):
   - `slug`, `platform`, `h1`, `metaTitle`, `metaDescription`, `updatedAt`
   - `aiSummary`, `quickAnswer`, `meaning`
   - `commonCauses`, `checklist`, `evidence`, `recoverySteps`, `mistakes`
   - `whenToAskExpert`, `faqs`, `relatedSlugs`
3. Create a new page at the appropriate path:
   - Google Merchant Center: `src/app/google-merchant-center/[slug]/page.tsx`
   - TikTok Shop: `src/app/tiktok-shop/[slug]/page.tsx`
4. Run `npm run validate` before deploying

### Site Configuration

All brand and site-level configuration is in `src/config/site.ts`. Do not hardcode brand names, disclaimers, or CTAs elsewhere.

## Docker Deployment

### Build and Start

```bash
# Build the Docker image
docker compose build

# Start the container
docker compose up -d

# Check container status
docker ps

# View logs
docker compose logs -f
```

### Deploy to Server

```bash
# On the server, clone or copy the project
cd /opt/sellerfixhub

# Copy environment file
cp .env.example .env

# Build and start
docker compose build
docker compose up -d
```

## Caddy Configuration

The `Caddyfile` in this project is for reference. To deploy with Caddy on the server:

### Option 1: Append to Existing Caddyfile

```bash
# Backup existing Caddyfile
sudo cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.backup.$(date +%Y%m%d%H%M%S)

# Append sellerfixhub configuration
sudo tee -a /etc/caddy/Caddyfile <<'EOF'
sellerfixhub.com, www.sellerfixhub.com {
    reverse_proxy 127.0.0.1:3000
}
EOF

# Reload Caddy
sudo caddy reload --config /etc/caddy/Caddyfile
```

### Option 2: Copy Caddyfile from This Project

```bash
sudo cp Caddyfile /etc/caddy/Caddyfile.d/sellerfixhub.conf
sudo caddy reload
```

### If Caddy Is Not Installed

Install Caddy from the official repository:

```bash
sudo apt update
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

## DNS Configuration

Before enabling Caddy, configure DNS records for your domain:

1. Add an **A record** pointing to your server IP:
   - `sellerfixhub.com` → `YOUR_SERVER_IP`
   - `www.sellerfixhub.com` → `YOUR_SERVER_IP`

2. Wait for DNS propagation (typically 5–30 minutes)

3. Caddy will automatically request and manage SSL certificates via Let's Encrypt

## Project Structure

```
sellerfixhub/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── disclaimer/
│   │   ├── platforms/
│   │   ├── google-merchant-center/
│   │   ├── tiktok-shop/
│   │   ├── tools/issue-message-explainer/
│   │   └── services/expert-matching/
│   ├── components/             # Reusable React components
│   ├── config/site.ts         # Central site configuration
│   └── data/                  # Issue data and platform info
│       ├── issues.ts
│       ├── platforms.ts
│       └── provider-research.ts
├── scripts/                   # Validation scripts
│   ├── check-claims.mjs
│   ├── check-content.mjs
│   └── check-links.mjs
├── public/                    # Static assets
│   └── llms.txt
├── Dockerfile
├── docker-compose.yml
├── Caddyfile
└── .env.example
```

## What This Site Does NOT Do

- Guarantee product approval, account reinstatement, or appeal success
- Represent Google, TikTok, Amazon, Shopify, or any marketplace
- File appeals on behalf of sellers
- Collect passwords, API keys, payment details, identity documents, or sensitive personal information
- Operate as a law firm
- Provide automatic appeal submission

## License

Proprietary. All rights reserved.
