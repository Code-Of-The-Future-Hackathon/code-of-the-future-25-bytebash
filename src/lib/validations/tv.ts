import { z } from "zod";

export const tvCreateSchema = z.object({
  id: z.string(),
  name: z.string().min(1).max(256),
  usage: z.string(),
  type: z.string().min(1).max(256),
  ownerId: z.string().min(1).max(256),
  createdAt: z.number(),
  updatedAt: z.number(),
});

export type TvCreate = z.infer<typeof tvCreateSchema>;
