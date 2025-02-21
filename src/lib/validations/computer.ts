import { z } from "zod";

export const computerCreateSchema = z.object({
  name: z.string().min(1).max(256),
});

export type ComputerCreate = z.infer<typeof computerCreateSchema>;
