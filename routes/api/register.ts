import { HandlerContext } from "$fresh/server.ts";
// import { client} from "../../config/DbConnection.ts";
import  "environment";
// import { User} from "../../models/User.ts";

import { validate,required,isEmail,isString} from "validator"


export const handler: Handlers = {
  async GET(req, ctx) {
    return Response.json( "Auth failed", {
        status: 502,
        statusText: "Bad Gateway",
      } );
  },
  async POST(req, ctx) {
    
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
        // const result = await client.queryArray("SELECT * FROM statement;");
        const y =Deno.env.get("author");
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
    
  },
};