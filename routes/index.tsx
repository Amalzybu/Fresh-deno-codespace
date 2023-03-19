import { Head } from "$fresh/runtime.ts";

import Header from "../components/Navigationbar.tsx";
import CommonFooter from "../components/Footer.tsx";



export default function Home() {
  return (
    <div class="min-h-screen grid grid-cols-1" style="grid-template-rows: auto 1fr auto;">
    <Header/>
      <Head>
        <title>UseMeWise</title>
      </Head>
      <main class="max-w-screen-lg mx-auto p-4">
      <div class="p-4 mx-auto max-w-screen-md">
        
      <h2 class="pt-5 md:pt-10 pb-3 md:pb-5 font-semibold text-center text-6xl md:text-8xl antialiased hover:subpixel-antialiased tracking-wide text-red-600 hover:text-sky-400 ">USE me WISE</h2>
      <div class="flex flex-col space-y-4 mt-8">
        <button type="button" class="place-content-center w-full inline-block px-6 py-4 border-2 border-black text-red-600 font-bold text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4">
            <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
          </svg>
          <span>Sign in with Facebook</span>
          </button>
          <button type="button" class="place-content-center w-full inline-block px-6 py-4 border-2 border-black text-red-600 font-bold text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-4 h-4">
              <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
            </svg>
            <span>Sign in with Google</span>
          </button>
        </div>
        
      </div>
      </main>
      <CommonFooter/>
    </div>
  );
}
