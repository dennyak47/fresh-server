import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>
) {
  console.log(req);
  const resp = await ctx.next();
  return resp;
}
