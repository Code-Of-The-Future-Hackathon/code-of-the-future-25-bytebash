import { type NextRequest, NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import { NotFoundError } from "~/lib/exceptions";
import { lampDelete } from "~/server/db/lamps/queries";
import { lampsResponseSchema } from "~/lib/validations/lamp";

interface IdProps {
  params: Promise<{ id: string }>;
}

// delete lamp
export async function DELETE(_request: NextRequest, props: IdProps) {
  try {
    const { id } = await props.params;
    const { ownerId } = await authenticate({});

    const lamp = await lampDelete({
      id,
      ownerId,
    });
    if (!lamp) throw new NotFoundError();

    return NextResponse.json(lampsResponseSchema.parse(lamp));
  } catch (error) {
    return handleError(error);
  }
}
