import { NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import { absenteeResponseSchema } from "~/lib/validations/absentee";
import { absenteeGetAll } from "~/server/db/absentee/queries";

// get all absentees
export async function GET() {
  try {
    const { ownerId } = await authenticate();

    const absentees = await absenteeGetAll({
      ownerId,
    });

    return NextResponse.json(absenteeResponseSchema.array().parse(absentees));
  } catch (error) {
    return handleError(error);
  }
}
