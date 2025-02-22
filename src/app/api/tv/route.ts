import { NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import { tvResponseSchema } from "~/lib/validations/tv";
import { tvGetAll } from "~/server/db/tv/queries";

// get all tv
export async function GET() {
  try {
    const { ownerId } = await authenticate();

    const tv = await tvGetAll({
      ownerId,
    });

    return NextResponse.json(tvResponseSchema.array().parse(tv));
  } catch (error) {
    return handleError(error);
  }
}
