import { Client } from "postgres";
import "environment";
const client = new Client({
    user: Deno.env.get("user"),
    database: Deno.env.get("database"),
    hostname: Deno.env.get("hostname"),
    password: Deno.env.get("password"),
    port: Deno.env.get("port"),
    });

async function getConnection(){
    await client.connect()
    return client;
}
export {getConnection}