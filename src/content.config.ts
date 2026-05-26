import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const crafts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/crafts" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(200),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    status: z.enum(["active", "wip", "archived"]),
    tags: z.array(z.string()).default([]),
    logo: z.string().optional(),
    startedAt: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

const craftsman = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/craftsman" }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    avatarUrl: z.string().url(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        }),
      )
      .default([]),
  }),
});

export const collections = { crafts, craftsman };
