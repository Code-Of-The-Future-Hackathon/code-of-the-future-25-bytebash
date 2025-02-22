import { z } from "zod";

export const tvCreateSchema = z.object({
  name: z.string().min(1).max(256),
  type: z.string().min(1).max(256),
});

export type TvCreate = z.infer<typeof tvCreateSchema>;

export const tvResponseSchema = z.object({
  id: z.string(),
  name: z.string().min(1).max(256),
  usage: z.string(),
  type: z.string().min(1).max(256),
  status: z.boolean(),
  ownerId: z.string().min(1).max(256),
  createdAt: z.number(),
  updatedAt: z.number(),
});

export type TvResponse = z.infer<typeof tvResponseSchema>;
