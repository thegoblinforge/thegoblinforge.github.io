# 1. Crafts have their own detail pages

Date: 2026-05-26

## Status

Accepted

## Context

The site needs to present a list of crafts (see [CONTEXT.md](../../CONTEXT.md)) authored as markdown files. Three IA options were considered:

1. **Cards only** — homepage shows a grid of cards; markdown frontmatter is the entire content; no per-craft routes.
2. **Cards + detail pages** — homepage shows cards; each card links to `/crafts/<slug>` rendered from the markdown body.
3. **Expandable inline cards** — single-page; cards expand in place; no per-craft routes.

Renato initially leaned toward (3) for the single-page feel, but on reflection chose (2) for the reasons below.

## Decision

Each craft has a dedicated route at `/crafts/<slug>` that renders the full markdown body. The homepage shows a list/grid of craft cards, each linking to its detail page.

Markdown files live in an Astro content collection (`src/content/crafts/`) so the schema is validated at build time.

## Consequences

**Positive:**

- Each craft has a shareable, deep-linkable URL — useful when promoting a specific craft (e.g., puduchat) without bouncing visitors through the homepage.
- The markdown body actually carries content. The phrase "projects stored in markdown" earns its keep — otherwise frontmatter-only YAML would do the same job.
- Justifies Astro content collections + their type-safe schema, which is the idiomatic path the rest of the stack expects.
- Adding the second craft is purely a content change (drop a `.md` file in the collection), not a code change.

**Negative:**

- More to build up front than option (1).
- Empty or thin detail pages would be worse than no detail pages — discipline required to actually write a body per craft.
- Sacrifices the single-page "scroll through everything" feel.
