# 2. Deploy as an organization GitHub Pages site

Date: 2026-05-26

## Status

Accepted

## Context

The site needs to ship to a public URL. Three deploy shapes were considered:

1. **Custom apex domain** (`thegoblinforge.io`) — requires owning the domain, configuring DNS, and a `CNAME` file.
2. **Project page** under the smith's personal account (`donreno.github.io/thegoblinforge.io/`) — works without DNS, but the URL reads as a typo and every internal link must be `base`-aware.
3. **Organization page** (`thegoblinforge.github.io`) — requires a GitHub org named `thegoblinforge` owning a repo named exactly `thegoblinforge.github.io`. Clean URL, no DNS, no `base` prefix.

Renato does not own the `.io` domain. The brand name should match the URL, so (2) is out. Option (3) gives the cleanest URL that still reflects the brand.

## Decision

The site deploys as a GitHub organization page at `https://thegoblinforge.github.io`.

Astro is configured with:

- `site: "https://thegoblinforge.github.io"`
- `base: "/"` (no prefix — org pages serve from the root)

No `CNAME` file. No DNS configuration.

The repo will eventually live at `github.com/thegoblinforge/thegoblinforge.github.io`. During initial development it is being pushed to the smith's personal account; the rename and org transfer happen before GitHub Pages is enabled, to avoid a broken interim deploy at the wrong URL.

## Consequences

**Positive:**

- Clean, brand-matching URL with no DNS or domain registrar involved.
- No `base` prefix means internal links and asset paths stay simple.
- Free under GitHub's standard Pages allowance for public repos.

**Negative:**

- The `thegoblinforge` GitHub org must be created and the repo renamed/transferred before first deploy. Until then, the site cannot be served at its real URL.
- Switching to a custom domain later requires updating `site`, adding `CNAME`, and configuring DNS — non-trivial but straightforward.
