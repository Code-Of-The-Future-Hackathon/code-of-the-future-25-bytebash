import { type NextRequest, NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import {
  type EquipmentCreate,
  equipmentCreateSchema,
  equipmentResponseSchema,
} from "~/lib/validations/equipment";
import {
  equipmentGetAll,
  equipmentInsert,
} from "~/server/db/equipment/queries";

// get all equipment
export async function GET() {
  try {
    const { ownerId } = await authenticate();

    const equipment = await equipmentGetAll({
      ownerId,
    });

    return NextResponse.json(equipmentResponseSchema.array().parse(equipment));
  } catch (error) {
    return handleError(error);
  }
}

// create equipment
export async function POST(request: NextRequest) {
  try {
    const { ownerId } = await authenticate();

    const json = (await request.json()) as EquipmentCreate;
    const create = equipmentCreateSchema.parse(json);

    const equipment = await equipmentInsert({
      create,
      ownerId,
    });

    return NextResponse.json(equipmentResponseSchema.parse(equipment), {
      status: 201,
    });
  } catch (error) {
    return handleError(error);
  }
}
