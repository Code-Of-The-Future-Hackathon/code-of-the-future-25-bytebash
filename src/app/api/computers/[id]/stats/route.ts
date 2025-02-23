import { type NextRequest, NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import { NotFoundError, UnauthorizedError } from "~/lib/exceptions";
import {
  computerResponseSchema,
  type ComputerStats,
  computerStatsSchema,
} from "~/lib/validations/computer";
import { computerStatsUpdate } from "~/server/db/computers/queries";

interface IdProps {
  params: Promise<{ id: string }>;
}

// update device stats
export async function POST(request: NextRequest, props: IdProps) {
  try {
    const { id } = await props.params;
    const { apiKey } = await authenticate({ request });

    if (!apiKey) throw new UnauthorizedError();

    const json = (await request.json()) as ComputerStats;
    const stats = computerStatsSchema.parse(json);

    const computer = await computerStatsUpdate({
      id,
      stats,
      apiKey,
    });
    if (!computer) throw new NotFoundError();

    return NextResponse.json(computerResponseSchema.parse(computer));
  } catch (error) {
    return handleError(error);
  }
}
