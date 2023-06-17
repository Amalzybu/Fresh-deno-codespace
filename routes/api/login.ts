import { client} from "../../config/DbConnection.ts";
import  "environment";
// import {decode,encode} from "base64"
// import { User} from "../../models/User.ts";

import { validate,required,isEmail,isString} from "validator"
// import * as bcrypt from "bcrypt";
import { setCookie } from "std/http/cookie.ts";
// import { create } from "djwt"






export const handler: Handlers = {
  GET() {
    return Response.json( "Auth failed", {
        status: 502,
        statusText: "Bad Gateway",
      } );
  },
  async POST(req: Request) {
    try{
      const form = await req.formData();
      const email=form.get("email")?.toString();
      const password=form.get("password")?.toString();
    console.log("sdsdsd ",email); 
    if(form){
        const input= {
          email:email,
          password:password
        }
        const [ passes, errors ] = await validate(input, {
          email: [required,isEmail,isString],
          password: [required, isString],
        });
        
        console.log({ passes, errors });
        if(!passes){
          return Response.json( {message:"error",data:errors}, {
            status: 402,
            data: errors,
        } );
        }

        
        // const y =Deno.env.get("author");
        await client.connect()
        const { rows: result } = await client.queryObject(
            "select * from public.user where email = $1 limit 1",
            [email]
          );
          console.debug("dfgfgdhfg ",result)
        // const jwt = await create({ alg: "HS512", typ: "JWT" }, { foo: "bar" }, "secret")
        // const isPasswordCorrect = await bcrypt.compare(password, result[0].password);
        const isPasswordCorrect = true;
        if(isPasswordCorrect){
          const url = new URL(req.url);
          const headers = new Headers();
          setCookie(headers, {
            name: "auth",
            value: "jwt", // this should be a unique value for each session
            maxAge: 120,
            sameSite: "Lax", // this is important to prevent CSRF attacks
            domain: url.hostname,
            path: "/",
            secure: true,
          });
          headers.set("location", "/");
          return new Response(null, {
            status: 302,
            headers,
          });
        }
        else{
          return Response.json( {message:"mismatched credentials"}, {
            status: 200,
            statusText: "good",
        });
        }

    }
    else{
        return Response.json( {message:"invalid request"}, {
            status: 502,
            statusText: "good",
        } );
    }
  }
  catch(e:Exception){
    console.debug("error is  ",e)
    return Response.json( {message:"invalid request ",e}, {
      status: 502,
      statusText: "good",
  } );
  }
  },
};
