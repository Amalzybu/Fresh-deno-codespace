import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
import { decode } from "djwt"

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {



  
    const cookies = getCookies(req.headers);
    console.debug("middleware----------------------------",cookies?.auth);
    if(cookies?.auth){
      console.debug("----------------------------",cookies,cookies?.auth);
      const   payload   = decode(cookies?.auth)[1];
      console.debug("payload----------------------------",payload);
     
    }
    
    
    
//   ctx.state.data = "myData";
  const resp = await ctx.next();
//   resp.headers.set("server", "fresh server");
  return resp;
}