
import  "environment";
// import {decode,encode} from "base64"
// import { User} from "../../models/User.ts";

import { deleteCookie } from "std/http/cookie.ts";






export const handler: Handlers = {
  GET(req: Request,ctx) {
    console.debug("44444444444444444444444444444444444444444 ",ctx)
    const url = new URL(req.url);
    const headers = new Headers(req.headers);
    deleteCookie(headers, "auth", { path: "/", domain: url.hostname });
    console.debug("cookie is deleting----------------------------------")
    headers.set("location", "/");
    return new Response(null, {
      status: 302,
      headers,
    });
  },
   POST(_req: Request) {
    return Response.json( "Auth failed", {
        status: 502,
        statusText: "Bad Gateway",
      } );
  },
};
