import { z } from "zod";

export const absenteeCreateSchema = z.object({
  id: z.string(),
  absent: z.string().min(1).max(256),
  classStart: z.string().min(1).max(256),
  classEnd: z.number(),
  className: z.number(),
  ownerId: z.string().min(1).max(256),
});

export type AbsenteeCreate = z.infer<typeof absenteeCreateSchema>;
