import { type NextRequest, NextResponse } from "next/server";
import { authenticate } from "~/lib/auth";
import { handleError } from "~/lib/error";
import { NotFoundError, UnauthorizedError } from "~/lib/exceptions";
import {
  networkResponseSchema,
  type NetworkStats,
  networkStatsSchema,
} from "~/lib/validations/network";
import { networkStatsUpdate } from "~/server/db/networks/queries";

// update network stats
export async function POST(request: NextRequest) {
  try {
    const { apiKey } = await authenticate({ request });

    if (!apiKey) throw new UnauthorizedError();

    const json = (await request.json()) as NetworkStats;
    const stats = networkStatsSchema.parse(json);

    const network = await networkStatsUpdate({
      stats,
      apiKey,
    });
    if (!network) throw new NotFoundError();

    return NextResponse.json(networkResponseSchema.parse(network));
  } catch (error) {
    return handleError(error);
  }
}
