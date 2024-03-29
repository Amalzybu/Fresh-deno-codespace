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



  const withSession = [
    "/user/dashboard",
    "/register",
    "/_frsh",
    "/api",
    "/favicon.ico"
  ]
    const cookies = getCookies(req.headers);
    const { pathname } = new URL(req.url)
    console.debug("middleware1---------------------------- ",pathname);
    // console.debug("URL ----------------------------");
    
    
    
    
//   ctx.state.data = "myData";
  const resp = await ctx.next();
  const allowPass = withSession.find((x)=>{
    return pathname.includes(x)
  })
  if(allowPass){
    return resp;
  }
  if(cookies?.auth){
    // console.debug("----------------------------",cookies,cookies?.auth);
    const   payload   = decode(cookies?.auth)[1];
    console.debug("payload----------------------------",payload);
    return new Response("", { status: 307,headers: { Location: "/user/dashboard" }});
   
  }
//   resp.headers.set("server", "fresh server");
  return resp;
}