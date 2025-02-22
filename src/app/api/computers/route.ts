import { type NextRequest, NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import {
  type ComputerCreate,
  computerCreateSchema,
  computerResponseSchema,
} from "~/lib/validations/computer";
import { computerInsert, computersGetAll } from "~/server/db/computers/queries";

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

// create computer
export async function POST(request: NextRequest) {
  try {
    const { ownerId } = await authenticate();

    const json = (await request.json()) as ComputerCreate;
    const create = computerCreateSchema.parse(json);

    const computer = await computerInsert({
      create,
      ownerId,
    });

    return NextResponse.json(computerResponseSchema.parse(computer), {
      status: 201,
    });
  } catch (error) {
    return handleError(error);
  }
}
