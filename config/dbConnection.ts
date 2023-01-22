
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";



await (async()=>{
    const client = new Client({
    user: "postgres",
    database: "postgres",
    hostname: "db.njmidatyhzedifbikexu.supabase.co",
    password: "123Captain$psql",
    port: 5432,
    });
   
    client.connect().then(async(data)=>{
        const result = await client.queryArray("SELECT * FROM users;");
        console.log(result.rows); // [[1, 'Carlos'], [2, 'John'], ...]
    });

   
})();

