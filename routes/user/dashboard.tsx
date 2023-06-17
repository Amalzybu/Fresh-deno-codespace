import { Head } from "$fresh/runtime.ts";

import Header from "../../components/Navigationbar.tsx";
import CommonFooter from "../../components/Footer.tsx";
import UserSidebar from "../../islands/UserSidebar.tsx";




export default function Dashboard() {
  return (
    <div class="min-h-screen grid grid-cols-1" style="grid-template-rows: auto 1fr auto;">
        
    <Header/>
    
      <Head>
        <title>Dashboard</title>
      </Head>
      <UserSidebar/>

      <CommonFooter/>
    </div>
  );
}
