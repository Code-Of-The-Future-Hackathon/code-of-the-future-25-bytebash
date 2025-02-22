import "server-only";
import { and, eq } from "drizzle-orm";
import { type ComputerCreate } from "~/lib/validations/computer";
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
        ownerId,
      })
      .returning()
  )[0];
}

interface ComputersGetAllProps {
  ownerId: string;
}

export async function computersGetAll({ ownerId }: ComputersGetAllProps) {
  return db.select().from(computers).where(
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
