import { Head } from "$fresh/runtime.ts";

import Header from "../components/Navigationbar.tsx";
import CommonFooter from "../components/Footer.tsx";
import PrivacySidebar from "../components/privacy/PrivacySidebar.tsx";




export default function PrivacyPolicy() {
  return (
    <div class="min-h-screen grid grid-cols-1" style="grid-template-rows: auto 1fr auto;">
        
    <Header/>
    
      <Head>
        <title>UseMeWise</title>
      </Head>
      <PrivacySidebar/>
      

      <CommonFooter/>
    </div>
  );
}
