import { z } from "zod";

export const lampsCreateSchema = z.object({
  name: z.string().min(1).max(256),
});

export type LampsCreate = z.infer<typeof lampsCreateSchema>;
