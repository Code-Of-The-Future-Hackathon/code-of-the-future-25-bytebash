import { z } from "zod";

export const absenteeCreateSchema = z.object({
  absent: z.string().min(1).max(256),
});

export type AbsenteeCreate = z.infer<typeof absenteeCreateSchema>;
