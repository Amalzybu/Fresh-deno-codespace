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



  const { pathname } = new URL(req.url)
    console.debug("middleware2---------------------------- ",pathname);

    const cookies = getCookies(req.headers);
 
    
    
  
  const resp = await ctx.next();
  if(cookies?.auth){
    // console.debug("----------------------------",cookies,cookies?.auth);
    const   payload   = decode(cookies?.auth)[1];
    ctx.state.data = payload;
    console.debug("payload------------------11111----------",payload);
    return resp;
   
  }
//   resp.headers.set("server", "fresh server");
  // return resp
   return new Response("", { status: 307,headers: { Location: "/" }});

}