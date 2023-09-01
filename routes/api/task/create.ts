import { getConnection} from "../../../config/DbConnection.ts";
import  "environment";

// import { User} from "../../models/User.ts";

import { validate,required,isNumber,isString} from "validator"



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
          name: [required,isString],
          minHours: [required, isNumber],
          maxHoours: [required, isNumber],
          point: [required,isNumber],
          description: [required, isString],
          depedencies: [required, isNumber]
        });
        
        console.log({ passes, errors });
        if(!passes){
          return Response.json( {message:"error",data:errors}, {
            status: 402,
            data: errors,
        } );
        }


        // const y =Deno.env.get("author");
        const client =await getConnection()
      
        await client.queryArray(
            "INSERT INTO public.task (email, password) VALUES ($1, $2) ",
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
