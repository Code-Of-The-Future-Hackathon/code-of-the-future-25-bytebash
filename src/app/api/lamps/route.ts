import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import {
  LampsCreate,
  lampsCreateSchema,
  lampsResponseSchema,
} from "~/lib/validations/lamps";
import { lampsGetAll, lampsInsert } from "~/server/db/lamps/queries";

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

// create lamp
export async function POST(request: NextRequest) {
  try {
    const { ownerId } = await authenticate();

    const json = (await request.json()) as LampsCreate;
    const create = lampsCreateSchema.parse(json);

    const lamp = await lampsInsert({
      create,
      ownerId,
    });

    return NextResponse.json(lampsResponseSchema.parse(lamp), {
      status: 201,
    });
  } catch (error) {
    return handleError(error);
  }
}
