import { z } from "zod";

export const networkCreateSchema = z.object({
  name: z.string().min(1).max(256),
  type: z.string().min(1).max(256),
  apiKey: z.string().min(1).max(256).nullable(),
});

export type NetworkCreate = z.infer<typeof networkCreateSchema>;

export const networkResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  traffic: z.string(),
  type: z.string(),
  status: z.boolean(),
  ispName: z.string().nullable(),
  ispOrganization: z.string().nullable(),
  txRetry: z.string().nullable(),
  wanUptime: z.string().nullable(),
  ownerId: z.string(),
  createdAt: z.number(),
  updatedAt: z.number().nullable(),
});

export type NetworkResponse = z.infer<typeof networkResponseSchema>;

export const networkStatsSchema = z.object({
  ispName: z.string(),
  ispOrganization: z.string(),
  txRetry: z.string(),
  wanUptime: z.string(),
});

export type NetworkStats = z.infer<typeof networkStatsSchema>;
