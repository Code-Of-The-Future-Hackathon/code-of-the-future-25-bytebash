import "server-only";
import { and, desc, eq } from "drizzle-orm";
import { type ComputerCreate, ComputerStats } from "~/lib/validations/computer";
import { db } from "~/server/db";
import { computers } from "~/server/db/computers/schema";

interface ComputerInsertProps {
  create: ComputerCreate;
  ownerId: string;
}

export async function computerInsert({ create, ownerId }: ComputerInsertProps) {
  return (
    await db
      .insert(computers)
      .values({
        name: create.name,
        apiKey: create.apiKey,
        ownerId,
      })
      .returning()
  )[0];
}

interface ComputersGetAllProps {
  ownerId: string;
}

export async function computersGetAll({ ownerId }: ComputersGetAllProps) {
  return db.select().from(computers).orderBy(desc(computers.createdAt)).where(
    eq(computers.ownerId, ownerId), // Ensure ownership
  );
}

interface ComputerGetByIdProps {
  id: string;
  ownerId: string;
}

export async function computerGetById({ id, ownerId }: ComputerGetByIdProps) {
  return (
    await db
      .select()
      .from(computers)
      .where(
        and(
          eq(computers.ownerId, ownerId), // Ensure ownership
          eq(computers.id, id),
        ),
      )
  )[0];
}

interface ComputerDeleteProps {
  id: string;
  ownerId: string;
}

export async function computerDelete({ id, ownerId }: ComputerDeleteProps) {
  return (
    await db
      .delete(computers)
      .where(
        and(
          eq(computers.ownerId, ownerId), // Ensure ownership
          eq(computers.id, id),
        ),
      )
      .returning()
  )[0];
}

interface ComputerStatsUpdateProps {
  id: string;
  stats: ComputerStats;
  apiKey: string;
}

export async function computerStatsUpdate({
  id,
  stats,
  apiKey,
}: ComputerStatsUpdateProps) {
  return (
    await db
      .update(computers)
      .set({
        usage: stats.usage,
        battery: stats.battery,
      })
      .where(and(eq(computers.apiKey, apiKey), eq(computers.id, id)))
      .returning()
  )[0];
}
