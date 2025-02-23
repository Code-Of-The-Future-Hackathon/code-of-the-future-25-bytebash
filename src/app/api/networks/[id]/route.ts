import { type NextRequest, NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import { NotFoundError } from "~/lib/exceptions";
import { networkDelete } from "~/server/db/networks/queries";
import { networkResponseSchema } from "~/lib/validations/network";

interface IdProps {
  params: Promise<{ id: string }>;
}

// delete absent
export async function DELETE(_request: NextRequest, props: IdProps) {
  try {
    const { id } = await props.params;
    const { ownerId } = await authenticate({});

    const network = await networkDelete({
      id,
      ownerId,
    });
    if (!network) throw new NotFoundError();

    return NextResponse.json(networkResponseSchema.parse(network));
  } catch (error) {
    return handleError(error);
  }
}
