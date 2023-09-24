import {asset,Head } from "$fresh/runtime.ts";

import Header from "../islands/Navigationbar.tsx";
import CommonFooter from "../components/Footer.tsx";
import HomeMenu from "../islands/HomeMenu.tsx";




export default function Home() {
  return (
    <div class="header w-full min-h-screen flex flex-col justify-between" inject-style="custom.css">
      <Head>
        <title>UseMeWise</title>
    </Head>
    <Header/>
    <div class="flex flex-col justify-center h-full py-12">
        <div class="self-center items-center flex flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4 sm:px-0">
          <div class="w-full text-center sm:text-left sm:w-1/2 py-12 sm:px-8">
            <h1 class="tracking-wide text-pink-600 text-2xl mb-6">New Thing: <span class="text-gray-800 font-bold tracking tracking-widest">AWE.SOME</span>
            </h1>
            <h2 class="font-bold tracking-wide text-4xl">Intro goes here...</h2>
                <span class="content__container block font-light text-browngray text-2xl my-6" >
                  <ul class="content__container__list" >
                    <li class="content__container__list__item xl:pl-3" >Cool Feature</li>
                    <li class="content__container__list__item xl:pl-3" >Another Feature</li>
                    <li class="content__container__list__item xl:pl-3" >Something Else</li>
                    <li class="content__container__list__item xl:pl-3" >Why Not</li>
                    <li class="content__container__list__item xl:pl-3" >Rotating</li>
                    <li class="content__container__list__item xl:pl-3" >List</li>
                    <li class="content__container__list__item xl:pl-3" >Items Here</li>
                  </ul>
                </span>
              <p class="font-bold tracking-widest text-4xl">...think about it!</p>
          </div>
          <div class="w-full sm:w-1/2">
            <img src="/undraw_Friends_online_re_r7pq.svg" alt="AWE.SOME header"></img>
          </div>
        </div>
      </div>
    <div class="flex flex-row w-full justify-center pb-12">
      <a class="px-10 py-2 text-gray-200 bg-pink-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red" href="#about">More Information</a>
    </div>
      
      <CommonFooter/>
    </div>
  );
}
