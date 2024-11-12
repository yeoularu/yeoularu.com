import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    publishDate: z.date(),
  }),
});

const ProjectCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    skills: z.array(z.string()),
    role: z.string().optional(),
    description: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    images: z.array(z.string()).optional(),
    siteUrl: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  project: ProjectCollection,
};
