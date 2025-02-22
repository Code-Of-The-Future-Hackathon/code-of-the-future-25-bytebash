import { type NextRequest, NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import { NotFoundError } from "~/lib/exceptions";
import { tvDelete } from "~/server/db/tv/queries";
import { tvResponseSchema } from "~/lib/validations/tv";

interface IdProps {
  params: Promise<{ id: string }>;
}

// delete device
export async function DELETE(_request: NextRequest, props: IdProps) {
  try {
    const { id } = await props.params;
    const { ownerId } = await authenticate();

    const tv = await tvDelete({
      id,
      ownerId,
    });
    if (!tv) throw new NotFoundError();

    return NextResponse.json(tvResponseSchema.parse(tv));
  } catch (error) {
    return handleError(error);
  }
}
