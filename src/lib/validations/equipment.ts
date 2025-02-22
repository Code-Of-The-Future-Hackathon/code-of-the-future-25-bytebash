import { z } from "zod";

export const equipmentCreateSchema = z.object({
  name: z.string().min(1).max(256),
  type: z.string().min(1).max(256),
});

export type EquipmentCreate = z.infer<typeof equipmentCreateSchema>;

export const equipmentResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  usage: z.string(),
  type: z.string(),
  status: z.boolean(),
  ownerId: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
});

export type EquipmentResponse = z.infer<typeof equipmentResponseSchema>;
