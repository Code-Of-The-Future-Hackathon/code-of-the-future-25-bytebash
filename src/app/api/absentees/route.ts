import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import {
  AbsenteeCreate,
  absenteeCreateSchema,
  absenteeResponseSchema,
} from "~/lib/validations/absentee";
import { absenteesGetAll, absenteeInsert } from "~/server/db/absentees/queries";

// get all absentees
export async function GET() {
  try {
    const { ownerId } = await authenticate({});

    const absentees = await absenteesGetAll({
      ownerId,
    });

    return NextResponse.json(absenteeResponseSchema.array().parse(absentees));
  } catch (error) {
    return handleError(error);
  }
}

// create absentee
export async function POST(request: NextRequest) {
  try {
    const { ownerId } = await authenticate({});

    const json = (await request.json()) as AbsenteeCreate;
    const create = absenteeCreateSchema.parse(json);

    const absentee = await absenteeInsert({
      create,
      ownerId,
    });

    return NextResponse.json(absenteeResponseSchema.parse(absentee), {
      status: 201,
    });
  } catch (error) {
    return handleError(error);
  }
}
