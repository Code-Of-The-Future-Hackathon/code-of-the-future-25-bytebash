import { z } from "zod";

export const computerCreateSchema = z.object({
  name: z.string().min(1).max(256),
});

export type ComputerCreate = z.infer<typeof computerCreateSchema>;

export const computerResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  usage: z.number(),
  status: z.boolean(),
  lastTurnOnAt: z.number(),
  ownerId: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
});

export type ComputerResponse = z.infer<typeof computerResponseSchema>;
