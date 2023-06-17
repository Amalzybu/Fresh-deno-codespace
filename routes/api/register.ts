import { client} from "../../config/DbConnection.ts";
import  "environment";

// import { User} from "../../models/User.ts";

import { validate,required,isEmail,isString} from "validator"
import * as bcrypt from "bcrypt";



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
        await client.connect()
        const hash = await bcrypt.hash(form.password);
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
    return Response.json( {message:"invalid request ",e}, {
      status: 502,
      statusText: "good",
  } );
  }
  },
};
