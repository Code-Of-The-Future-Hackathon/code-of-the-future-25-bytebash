import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "~/server/db";
import { LampsCreate } from "~/lib/validations/lamps";
import { lamps } from "~/server/db/lamps/schema";

interface LampsInsertProps {
  create: LampsCreate;
  ownerId: string;
}

export async function lampsInsert({ create, ownerId }: LampsInsertProps) {
  return (
    await db
      .insert(lamps)
      .values({
        groupName: create.groupName,
        ownerId,
      })
      .returning()
  )[0];
}

interface LampsGetAllProps {
  ownerId: string;
}

export async function lampsGetAll({ ownerId }: LampsGetAllProps) {
  return db.select().from(lamps).where(
    eq(lamps.ownerId, ownerId), // Ensure ownership
  );
}

interface LampsGetByIdProps {
  id: string;
  ownerId: string;
}

export async function lampsGetById({ id, ownerId }: LampsGetByIdProps) {
  return (
    await db
      .select()
      .from(lamps)
      .where(
        and(
          eq(lamps.ownerId, ownerId), // Ensure ownership
          eq(lamps.id, id),
        ),
      )
  )[0];
}

interface LampDeleteProps {
  id: string;
  ownerId: string;
}

export async function lampsDelete({ id, ownerId }: LampDeleteProps) {
  return (
    await db
      .delete(lamps)
      .where(
        and(
          eq(lamps.ownerId, ownerId), // Ensure ownership
          eq(lamps.id, id),
        ),
      )
      .returning()
  )[0];
}
