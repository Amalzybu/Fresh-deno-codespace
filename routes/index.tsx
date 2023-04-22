import { Head } from "$fresh/runtime.ts";

import Header from "../components/Navigationbar.tsx";
import CommonFooter from "../components/Footer.tsx";
import HomeMenu from "../islands/HomeMenu.tsx";




export default function Home() {
  return (
    <div class="min-h-screen grid grid-cols-1" style="grid-template-rows: auto 1fr auto;">
    <Header/>
      <Head>
        <title>UseMeWise</title>
      </Head>
      <HomeMenu/>
      <CommonFooter/>
    </div>
  );
}
