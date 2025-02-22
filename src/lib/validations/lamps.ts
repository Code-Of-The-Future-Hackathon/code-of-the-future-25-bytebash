import { z } from "zod";

export const lampsCreateSchema = z.object({
  id: z.string(),
  groupName: z.string().min(1).max(256),
  usage: z.string().min(1).max(256),
  status: z.boolean(),
  lastTurnOnAt: z.string().min(1).max(256),
  ownerId: z.string().min(1).max(256),
  createdAt: z.number(),
  updatedAt: z.number(),
});

export type LampsCreate = z.infer<typeof lampsCreateSchema>;
