import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "~/server/db";
import { type EquipmentCreate } from "~/lib/validations/equipment";
import { equipment } from "~/server/db/equipment/schema";

interface EquipmentInsertProps {
  create: EquipmentCreate;
  ownerId: string;
}

export async function equipmentInsert({
  create,
  ownerId,
}: EquipmentInsertProps) {
  return (
    await db
      .insert(equipment)
      .values({
        name: create.name,
        type: create.type,
        ownerId,
      })
      .returning()
  )[0];
}

interface EquipmentGetAllProps {
  ownerId: string;
}

export async function equipmentGetAll({ ownerId }: EquipmentGetAllProps) {
  return db.select().from(equipment).where(
    eq(equipment.ownerId, ownerId), // Ensure ownership
  );
}

interface EquipmentGetByIdProps {
  id: string;
  ownerId: string;
}

export async function equipmentGetById({ id, ownerId }: EquipmentGetByIdProps) {
  return (
    await db
      .select()
      .from(equipment)
      .where(
        and(
          eq(equipment.ownerId, ownerId), // Ensure ownership
          eq(equipment.id, id),
        ),
      )
  )[0];
}

interface EquipmentDeleteProps {
  id: string;
  ownerId: string;
}

export async function equipmentDelete({ id, ownerId }: EquipmentDeleteProps) {
  return (
    await db
      .delete(equipment)
      .where(
        and(
          eq(equipment.ownerId, ownerId), // Ensure ownership
          eq(equipment.id, id),
        ),
      )
      .returning()
  )[0];
}
