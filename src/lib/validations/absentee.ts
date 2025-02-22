import { z } from "zod";

export const absenteeCreateSchema = z.object({
  name: z.string().min(1).max(256),
});

export type AbsenteeCreate = z.infer<typeof absenteeCreateSchema>;

export const absenteeResponseSchema = z.object({
  id: z.string(),
  className: z.string(),
  name: z.string().min(1).max(256),
  classStart: z.number(),
  classEnd: z.string(),
  ownerId: z.string(),
});

export type AbsenteeResponse = z.infer<typeof absenteeResponseSchema>;
