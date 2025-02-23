import { type NextRequest, NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import { NotFoundError } from "~/lib/exceptions";
import { computerResponseSchema } from "~/lib/validations/computer";
import { computerDelete } from "~/server/db/computers/queries";

interface IdProps {
  params: Promise<{ id: string }>;
}

// delete device
export async function DELETE(_request: NextRequest, props: IdProps) {
  try {
    const { id } = await props.params;
    const { ownerId } = await authenticate({});

    const computer = await computerDelete({
      id,
      ownerId,
    });
    if (!computer) throw new NotFoundError();

    return NextResponse.json(computerResponseSchema.parse(computer));
  } catch (error) {
    return handleError(error);
  }
}
