import { z } from "zod";

export const lampsCreateSchema = z.object({
  name: z.string().min(1).max(256),
  groupName: z.string().min(1).max(256),
});

export type LampsCreate = z.infer<typeof lampsCreateSchema>;

export const lampsResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  groupName: z.string().min(1).max(256),
  usage: z.string().min(1).max(256),
  status: z.boolean(),
  lastTurnOnAt: z.number(),
  ownerId: z.string().min(1).max(256),
  createdAt: z.number(),
  updatedAt: z.number(),
});

export type LampsResponse = z.infer<typeof lampsResponseSchema>;
