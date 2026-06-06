# SellerFixHub Operations Guide

Runbook for day-to-day operations and common maintenance tasks.

---

## Project Location

```
/opt/sellerfixhub
```

---

## Container Management

### View running containers

```bash
docker ps
docker compose -f /opt/sellerfixhub/docker-compose.yml ps
```

### View container logs

```bash
# Last 100 lines
docker logs --tail=100 sellerfixhub

# Follow logs live
docker logs --tail=50 -f sellerfixhub
```

### Restart the container

```bash
cd /opt/sellerfixhub
docker compose restart
```

### Stop / Start

```bash
docker compose stop
docker compose start
```

---

## Deployment

### Full redeploy (after code changes)

```bash
cd /opt/sellerfixhub

# 1. Validate everything passes
npm run validate

# 2. Build and push new image
docker compose build
docker compose up -d

# 3. Verify container is healthy
docker ps
docker logs --tail=20 sellerfixhub
```

### Rebuild without pulling new base images

```bash
docker compose build --no-cache
docker compose up -d
```

---

## HTTPS / TLS

### Check Caddy status

```bash
sudo systemctl status caddy --no-pager
```

### Check Caddy logs

```bash
sudo journalctl -u caddy -n 100 --no-pager
```

### Reload Caddy config (after Caddyfile change)

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

### Check certificate status

```bash
sudo journalctl -u caddy --since "1 hour ago" --no-pager | grep -E "certificate|obtained|error"
```

### Check HTTPS via external request

```bash
curl -sI https://sellerfixhub.com
curl -sI https://www.sellerfixhub.com
```

---

## Health Checks

### Check local app (inside the server)

```bash
curl -sI http://127.0.0.1:3000/
curl -s http://127.0.0.1:3000/ | head -5
```

### Check SEO files

```bash
curl -s https://sellerfixhub.com/robots.txt
curl -s https://sellerfixhub.com/sitemap.xml | head -20
curl -s https://sellerfixhub.com/llms.txt | head -20
```

### Check sitemap coverage

```bash
curl -s https://sellerfixhub.com/sitemap.xml | grep -c "<loc>"
```

---

## Validation Commands

### Run all checks

```bash
npm run validate
```

### Run external smoke tests (requires network access to sellerfixhub.com)

```bash
npm run smoke:external
```

### Run full online verification

```bash
npm run verify:online
```

### Run individual checks

```bash
npm run check:claims
npm run check:content
npm run check:links
npm run lint
npm run build
```

---

## Caddyfile Changes

### Before editing Caddyfile

Always back up the current version:

```bash
sudo cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.bak.$(date +%Y%m%d%H%M%S)
```

### Validate before reload

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
```

### Apply changes

```bash
sudo systemctl reload caddy
```

---

## Data and Volumes

### Do NOT delete Docker volumes

The sellerfixhub container uses named volumes. Deleting volumes will not cause data loss for this static site, but is unnecessary.

```bash
# List volumes
docker volume ls | grep sellerfixhub
```

---

## URL Changes

> **Warning:** URL changes require sitemap updates and redirects.

If you must change a URL:

1. Add a 301 redirect in Caddyfile
2. Update `sitemap.xml` (regenerate with `npm run build`)
3. Update any internal links pointing to the old URL
4. Submit the new URL in Google Search Console

---

## Common Issues

### Container shows "unhealthy"

This is a false positive — the health check uses `wget` which is not installed in the Alpine base image. The app is running correctly. To silence the warning, rebuild the container.

### HTTPS not working after Caddyfile change

Check for configuration errors:

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo journalctl -u caddy -n 50 --no-pager
```

### Pages returning 404 externally but 200 locally

Check that DNS has fully propagated to Let's Encrypt's DNS servers. Caddy needs DNS A records to be visible to LE's resolvers before issuing certificates. Wait 10–30 minutes after DNS changes.

### Build fails

```bash
npm run lint     # check for TypeScript errors
npm run build    # run build directly for full output
```

---

## Monitoring

### Automated smoke tests

Run via cron (example — every 5 minutes):

```bash
*/5 * * * * cd /opt/sellerfixhub && npm run smoke:external >> /var/log/sellerfixhub-smoke.log 2>&1
```

### Log rotation for smoke test logs

```bash
sudo journalctl -u caddy --since "24 hours ago" | grep -E "error|ERROR|certificate" | tail -20
```
