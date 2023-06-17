import { getConnection} from "../../config/DbConnection.ts";
import  "environment";

// import { User} from "../../models/User.ts";

import { validate,required,isEmail,isString} from "validator"
import {Base64}  from "https://deno.land/x/bb64/mod.ts";



export const handler: Handlers = {
  GET() {
    return Response.json( "Auth failed", {
        status: 502,
        statusText: "Bad Gateway",
      } );
  },
  async POST(req: Request) {
    try{
    const form = await req.json();
    console.log(form); 
    if(form){
        const [ passes, errors ] = await validate(form, {
          email: [required,isEmail,isString],
          password: [required, isString],
          confirmPassword: [required, isString]
        });
        
        console.log({ passes, errors });
        if(!passes){
          return Response.json( {message:"error",data:errors}, {
            status: 402,
            data: errors,
        } );
        }

        if(form.password != form.confirmPassword){
          return Response.json( {message:"error",data:errors}, {
            status: 402,
            data: {confirmPassword:"mismacthed password"},
          } );
        }
        // const y =Deno.env.get("author");
        const client =await getConnection()
        const hash = Base64.fromString(form.password).toString();
        const dbPassword = Base64.fromBase64String(hash).toString();
        console.debug("------------------------------------ ",hash,dbPassword);
        await client.queryArray(
            "INSERT INTO public.user (email, password) VALUES ($1, $2) ",
            [form.email, hash]
          );
        return Response.json( {message:"signup completed successfully"}, {
            status: 200,
            statusText: "good",
        } );
    }
    else{
        return Response.json( {message:"invalid request"}, {
            status: 502,
            statusText: "good",
        } );
    }
  }
  catch(e:Exception){
    console.debug("find production bug ----------------- ",e);
    return Response.json( {message:"invalid request ",e}, {
      status: 502,
      statusText: "good",
  } );
  }
  },
};
