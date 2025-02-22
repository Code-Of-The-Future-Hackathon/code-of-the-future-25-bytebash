import { NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import { lampsResponseSchema } from "~/lib/validations/lamps";
import { lampsGetAll } from "~/server/db/lamps/queries";

// get all lamps
export async function GET() {
  try {
    const { ownerId } = await authenticate();

    const lamps = await lampsGetAll({
      ownerId,
    });

    return NextResponse.json(lampsResponseSchema.array().parse(lamps));
  } catch (error) {
    return handleError(error);
  }
}
