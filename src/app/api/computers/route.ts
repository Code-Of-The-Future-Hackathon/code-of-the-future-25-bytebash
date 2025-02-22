import { NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import { computerResponseSchema } from "~/lib/validations/computer";
import { computersGetAll } from "~/server/db/computers/queries";

// get all computers
export async function GET() {
  try {
    const { ownerId } = await authenticate();

    const computers = await computersGetAll({
      ownerId,
    });

    return NextResponse.json(computerResponseSchema.array().parse(computers));
  } catch (error) {
    return handleError(error);
  }
}
