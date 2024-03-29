/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { InjectCSSPlugin } from "$inject-css/index.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
// import Gun from "gun";

await start(manifest, { plugins: [twindPlugin(twindConfig),InjectCSSPlugin()] });
// var gun = Gun({web: 5343, peers: 5});
