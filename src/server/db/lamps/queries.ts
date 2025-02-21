import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "~/server/db";
import { LampsCreate } from "~/lib/validations/lamps";
import { tv } from "~/server/db/tv/schema";

interface LampsInsertProps {
  create: LampsCreate;
  ownerId: string;
}

export async function lampsInsert({ create, ownerId }: LampsInsertProps) {
  await db.insert(tv).values({
    name: create.name,
    ownerId,
  });
}

interface TvGetAllProps {
  ownerId: string;
}

export async function lampsGetAll({ ownerId }: TvGetAllProps) {
  return db.select().from(tv).where(
    eq(tv.ownerId, ownerId), // Ensure ownership
  );
}

interface TvGetByIdProps {
  id: string;
  ownerId: string;
}

export async function lampsGetById({ id, ownerId }: TvGetByIdProps) {
  return (
    await db
      .select()
      .from(tv)
      .where(
        and(
          eq(tv.ownerId, ownerId), // Ensure ownership
          eq(tv.id, id),
        ),
      )
  )[0];
}

interface TvDeleteProps {
  id: string;
  ownerId: string;
}

export async function lampsDelete({ id, ownerId }: TvDeleteProps) {
  return (
    await db
      .delete(tv)
      .where(
        and(
          eq(tv.ownerId, ownerId), // Ensure ownership
          eq(tv.id, id),
        ),
      )
      .returning()
  )[0];
}
