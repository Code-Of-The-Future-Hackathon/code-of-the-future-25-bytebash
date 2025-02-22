import { auth } from "@clerk/nextjs/server";
import { UnauthorizedError } from "~/lib/exceptions";

export async function authenticate() {
  const authObject = await auth();

  if (!authObject.userId) {
    throw new UnauthorizedError();
  }

  return {
    userId: authObject.userId,
    ownerId: authObject.orgId ?? authObject.userId,
  };
}
