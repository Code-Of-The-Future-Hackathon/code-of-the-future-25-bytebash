import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "~/server/db";
import { TvCreate } from "~/lib/validations/tv";
import { tv } from "~/server/db/tv/schema";

interface TvInsertProps {
  create: TvCreate;
  ownerId: string;
}

export async function tvInsert({ create, ownerId }: TvInsertProps) {
  return (
    await db
      .insert(tv)
      .values({
        name: create.name,
        ownerId,
      })
      .returning()
  )[0];
}

interface TvGetAllProps {
  ownerId: string;
}

export async function tvGetAll({ ownerId }: TvGetAllProps) {
  return db.select().from(tv).where(
    eq(tv.ownerId, ownerId), // Ensure ownership
  );
}

interface TvGetByIdProps {
  id: string;
  ownerId: string;
}

export async function tvGetById({ id, ownerId }: TvGetByIdProps) {
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

export async function tvDelete({ id, ownerId }: TvDeleteProps) {
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
