import { z } from "zod";

export const networkCreateSchema = z.object({
  name: z.string().min(1).max(256),
  type: z.string().min(1).max(256),
});

export type NetworkCreate = z.infer<typeof networkCreateSchema>;

export const networkResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  traffic: z.string(),
  type: z.string(),
  status: z.boolean(),
  ownerId: z.string(),
  createdAt: z.number(),
  updatedAt: z.number().nullable(),
});

export type NetworkResponse = z.infer<typeof networkResponseSchema>;
