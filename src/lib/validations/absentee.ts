import { z } from "zod";

export const absenteeCreateSchema = z.object({
  absent: z.string().min(1).max(256),
});

export type AbsenteeCreate = z.infer<typeof absenteeCreateSchema>;

export const absenteeResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  usage: z.string(),
  status: z.boolean(),
  lastTurnOnAt: z.number(),
  ownerId: z.string(),
  createdAt: z.number(),
  updatedAt: z.number().nullable(),
});

export type AbsenteeResponse = z.infer<typeof absenteeResponseSchema>;
