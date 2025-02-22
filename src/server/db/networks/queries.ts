import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "~/server/db";
import { networks } from "~/server/db/networks/schema";
import { NetworkCreate } from "~/lib/validations/network";

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
        ownerId,
      })
      .returning()
  )[0];
}

interface NetworksGetAllProps {
  ownerId: string;
}

export async function networksGetAll({ ownerId }: NetworksGetAllProps) {
  return db.select().from(networks).where(
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
