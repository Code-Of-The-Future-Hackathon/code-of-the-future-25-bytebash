import { type NextRequest, NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import { NotFoundError } from "~/lib/exceptions";
import { equipmentDelete } from "~/server/db/equipment/queries";
import { equipmentResponseSchema } from "~/lib/validations/equipment";

interface IdProps {
  params: Promise<{ id: string }>;
}

// delete equipment
export async function DELETE(_request: NextRequest, props: IdProps) {
  try {
    const { id } = await props.params;
    const { ownerId } = await authenticate({});

    const equipment = await equipmentDelete({
      id,
      ownerId,
    });
    if (!equipment) throw new NotFoundError();

    return NextResponse.json(equipmentResponseSchema.parse(equipment));
  } catch (error) {
    return handleError(error);
  }
}
