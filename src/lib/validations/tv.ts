import { z } from "zod";

export const tvCreateSchema = z.object({
  name: z.string().min(1).max(256),
});

export type TvCreate = z.infer<typeof tvCreateSchema>;
