import "server-only";
import { and, desc, eq } from "drizzle-orm";
import {
  type NetworkCreate,
  type NetworkStats,
} from "~/lib/validations/network";
import { db } from "~/server/db";
import { computers } from "~/server/db/computers/schema";
import { networks } from "~/server/db/networks/schema";

interface NetworkInsertProps {
  create: NetworkCreate;
  ownerId: string;
}

export async function networkInsert({ create, ownerId }: NetworkInsertProps) {
  return (
    await db
      .insert(networks)
      .values({
        name: create.name,
        type: create.type,
        ...(create.apiKey && { apiKey: create.apiKey }),
        ownerId,
      })
      .returning()
  )[0];
}

interface NetworksGetAllProps {
  ownerId: string;
}

export async function networksGetAll({ ownerId }: NetworksGetAllProps) {
  return db.select().from(networks).orderBy(desc(computers.createdAt)).where(
    eq(networks.ownerId, ownerId), // Ensure ownership
  );
}

interface NetworkGetByIdProps {
  id: string;
  ownerId: string;
}

export async function networkGetById({ id, ownerId }: NetworkGetByIdProps) {
  return (
    await db
      .select()
      .from(networks)
      .where(
        and(
          eq(networks.ownerId, ownerId), // Ensure ownership
          eq(networks.id, id),
        ),
      )
  )[0];
}

interface NetworkDeleteProps {
  id: string;
  ownerId: string;
}

export async function networkDelete({ id, ownerId }: NetworkDeleteProps) {
  return (
    await db
      .delete(networks)
      .where(
        and(
          eq(networks.ownerId, ownerId), // Ensure ownership
          eq(networks.id, id),
        ),
      )
      .returning()
  )[0];
}

interface NetworkStatsUpdateProps {
  id?: string;
  stats: NetworkStats;
  apiKey: string;
}

export async function networkStatsUpdate({
  id,
  stats,
  apiKey,
}: NetworkStatsUpdateProps) {
  return (
    await db
      .update(networks)
      .set({
        ispName: stats.ispName,
        ispOrganization: stats.ispOrganization,
        txRetry: stats.txRetry,
        wanUptime: stats.wanUptime,
        status: true,
      })
      .where(
        and(
          eq(networks.apiKey, apiKey), // Authenticate device
          id ? eq(networks.id, id) : undefined,
        ),
      )
      .returning()
  )[0];
}
