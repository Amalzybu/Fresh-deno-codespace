import { getConnection} from "../../config/DbConnection.ts";
import  "environment";
// import {decode,encode} from "base64"
// import { User} from "../../models/User.ts";

import { validate,required,isEmail,isString} from "validator"
import {Base64}  from "https://deno.land/x/bb64/mod.ts";
import { setCookie } from "std/http/cookie.ts";
import { create } from "djwt"






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
        const client = await getConnection();
        const { rows: result } = await client.queryObject(
            "select id,email,created_at,password from public.user where email = $1 limit 1",
            [email]
          );
          const key = await crypto.subtle.generateKey(
            { name: "HMAC", hash: "SHA-512" },
            true,
            ["sign", "verify"],
          );
          console.debug("jwt ------------",result[0])
          result[0].id = typeof result[0].id  === 'bigint'? result[0].id.toString(): result[0].id ;
        const jwt = await create({ alg: "HS512", typ: "JWT" }, { user: result[0] }, key)
        console.debug("jwt ------------",result[0])
        const dbPassword = Base64.fromBase64String(result[0].password).toString();
        const isPasswordCorrect = dbPassword==password;
        if(isPasswordCorrect){
          const url = new URL(req.url);
          const headers = new Headers();
          setCookie(headers, {
            name: "auth",
            value: jwt, // this should be a unique value for each session
            maxAge: 1200,
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
