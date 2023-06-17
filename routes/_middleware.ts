import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
// import {decode,encode} from "base64"

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
    const cookies = getCookies(req.headers);
    console.debug("----------------------------",cookies,req.url);
    
//   ctx.state.data = "myData";
  const resp = await ctx.next();
//   resp.headers.set("server", "fresh server");
  return resp;
}