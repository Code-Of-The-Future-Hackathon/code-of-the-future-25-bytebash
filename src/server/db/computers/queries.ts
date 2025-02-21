import "server-only";
import { type ComputerCreate } from "~/lib/validations/computer";
import { db } from "~/server/db";
import { computers } from "~/server/db/computers/schema";

interface ComputerInsertProps {
  create: ComputerCreate;
  ownerId: string;
}

export async function computerInsert({ create, ownerId }: ComputerInsertProps) {
  await db.insert(computers).values({
    name: create.name,
    ownerId,
  });
}
