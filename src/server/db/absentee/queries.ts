import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "~/server/db";
import { AbsenteeCreate } from "~/lib/validations/absentee";
import { absentee } from "~/server/db/absentee/schema";

interface AbsenteeInsertProps {
  create: AbsenteeCreate;
  ownerId: string;
}

export async function absenteeInsert({ create, ownerId }: AbsenteeInsertProps) {
  await db.insert(absentee).values({
    absent: create.absent,
    ownerId,
  });
}

interface AbsenteeGetAllProps {
  ownerId: string;
}

export async function absenteeGetAll({ ownerId }: AbsenteeGetAllProps) {
  return db.select().from(absentee).where(
    eq(absentee.ownerId, ownerId), // Ensure ownership
  );
}

interface AbsenteeGetByIdProps {
  id: string;
  ownerId: string;
}

export async function computerGetById({ id, ownerId }: AbsenteeGetByIdProps) {
  return (
    await db
      .select()
      .from(absentee)
      .where(
        and(
          eq(absentee.ownerId, ownerId), // Ensure ownership
          eq(absentee.id, id),
        ),
      )
  )[0];
}

interface AbsenteeDeleteProps {
  id: string;
  ownerId: string;
}

export async function computerDelete({ id, ownerId }: AbsenteeDeleteProps) {
  return (
    await db
      .delete(absentee)
      .where(
        and(
          eq(absentee.ownerId, ownerId), // Ensure ownership
          eq(absentee.id, id),
        ),
      )
      .returning()
  )[0];
}
