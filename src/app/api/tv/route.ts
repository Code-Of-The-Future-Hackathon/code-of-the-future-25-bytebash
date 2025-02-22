import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import {
  TvCreate,
  tvCreateSchema,
  tvResponseSchema,
} from "~/lib/validations/tv";
import { tvGetAll, tvInsert } from "~/server/db/tv/queries";

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

// create tv
export async function POST(request: NextRequest) {
  try {
    const { ownerId } = await authenticate();

    const json = (await request.json()) as TvCreate;
    const create = tvCreateSchema.parse(json);

    const tv = await tvInsert({
      create,
      ownerId,
    });

    return NextResponse.json(tvResponseSchema.parse(tv), {
      status: 201,
    });
  } catch (error) {
    return handleError(error);
  }
}
