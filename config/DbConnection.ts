import  "environment";
import { Database, PostgresConnector } from 'postgres';
// import { User} from "../models/User.ts";

const connector = new PostgresConnector({
  database: Deno.env.get("database"),
  host: Deno.env.get("hostname"),
  username: Deno.env.get("user"),
  password: Deno.env.get("password"),
  port: 5432, // optional
});

const client = new Database(connector);

// client.link([User]);
export {client};