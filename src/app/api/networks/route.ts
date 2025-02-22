import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import {
  NetworkCreate,
  networkCreateSchema,
  networkResponseSchema,
} from "~/lib/validations/network";
import { networkInsert, networksGetAll } from "~/server/db/networks/queries";

// get all absentees
export async function GET() {
  try {
    const { ownerId } = await authenticate();

    const networks = await networksGetAll({
      ownerId,
    });

    return NextResponse.json(networkResponseSchema.array().parse(networks));
  } catch (error) {
    return handleError(error);
  }
}

// create absentee
export async function POST(request: NextRequest) {
  try {
    const { ownerId } = await authenticate();

    const json = (await request.json()) as NetworkCreate;
    const create = networkCreateSchema.parse(json);

    const network = await networkInsert({
      create,
      ownerId,
    });

    return NextResponse.json(networkResponseSchema.parse(network), {
      status: 201,
    });
  } catch (error) {
    return handleError(error);
  }
}
