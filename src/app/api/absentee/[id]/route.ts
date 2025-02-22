import { type NextRequest, NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import { NotFoundError } from "~/lib/exceptions";
import { absenteeDelete } from "~/server/db/absentee/queries";
import { absenteeResponseSchema } from "~/lib/validations/absentee";

interface IdProps {
  params: Promise<{ id: string }>;
}

// delete absent
export async function DELETE(_request: NextRequest, props: IdProps) {
  try {
    const { id } = await props.params;
    const { ownerId } = await authenticate();

    const absentee = await absenteeDelete({
      id,
      ownerId,
    });
    if (!absentee) throw new NotFoundError();

    return NextResponse.json(absenteeResponseSchema.parse(absentee));
  } catch (error) {
    return handleError(error);
  }
}
