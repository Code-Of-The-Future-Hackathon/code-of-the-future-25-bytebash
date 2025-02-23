import { auth } from "@clerk/nextjs/server";
import { type NextRequest } from "next/server";
import { UnauthorizedError } from "~/lib/exceptions";

interface AuthenticateProps {
  request?: NextRequest;
}

export async function authenticate({ request }: AuthenticateProps) {
  if (request?.headers.get("X-API-KEY")) {
    return {
      apiKey: request.headers.get("X-API-KEY"),
      userId: "",
      ownerId: "",
    };
  }

  const authObject = await auth();

  if (!authObject.userId) {
    throw new UnauthorizedError();
  }

  return {
    userId: authObject.userId,
    ownerId: authObject.orgId ?? authObject.userId,
  };
}
