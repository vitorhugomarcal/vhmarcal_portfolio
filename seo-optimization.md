# Implementation Plan: Orbizy SEO Optimization (Domain Consolidation)

This plan outlines the steps to consolidate `orbizy.app` as the primary, non-www canonical domain and resolve redirect chain issues reported in Google Search Console.

## 1. Analysis of Current Status
- **Canonical mismatch**: `layout.tsx` uses `https://orbizy.app`, but `robots.ts` and `sitemap.ts` use `https://www.orbizy.app`.
- **Redirect Chain**: 
  - `http://orbizy.app` -> `https://orbizy.app` -> `https://www.orbizy.app` (307/308 chain).
  - Goal: All paths -> `https://orbizy.app` (200 OK).

## 2. Technical Modifications

### Step A: Configure Redirects (`vercel.json`)
Create a new `vercel.json` file to explicitly redirect all `www` requests to the apex domain with a 308 (Permanent) status.

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "www.orbizy.app"
        }
      ],
      "destination": "https://orbizy.app/:path*",
      "permanent": true
    }
  ]
}
```

### Step B: Standardize Metadata Source (`src/app/robots.ts`)
Update the sitemap reference to use the apex domain.

```diff
- sitemap: 'https://www.orbizy.app/sitemap.xml',
+ sitemap: 'https://orbizy.app/sitemap.xml',
```

### Step C: Standardize Sitemap Generation (`src/app/sitemap.ts`)
Update the `baseUrl` constant to ensure all generated URLs in the XML sitemap are canonical.

```diff
- const baseUrl = 'https://www.orbizy.app'
+ const baseUrl = 'https://orbizy.app'
```

### Step D: Code Review & Verification (`src/app/[locale]/layout.tsx`)
- Ensure `baseUrl` is consistent.
- Check for actual Google Site Verification ID.

## 3. Mandatory Manual Steps (Vercel Dashboard)
To eliminate the 307 redirect, the user MUST:
1. Go to **Vercel Project Settings** -> **Domains**.
2. Select `orbizy.app` and click **Set as Primary**.
3. Ensure `www.orbizy.app` remains as a secondary domain that redirects to the primary one.

## 4. Verification Checklist
- [ ] `curl -I http://orbizy.app` returns `308` to `https://orbizy.app`.
- [ ] `curl -I https://www.orbizy.app` returns `308` to `https://orbizy.app`.
- [ ] `https://orbizy.app/sitemap.xml` contains apex URLs.
- [ ] Canonical tag in `<head>` matches the final URL.

---
> [!IMPORTANT]
> This change will consolidate all SEO weight to the non-www version. Ensure your Search Console is tracking the apex domain correctly.
