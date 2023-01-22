import { Head } from "$fresh/runtime.ts";

import Header from "../components/Navigationbar.tsx";


export default function Home() {
  return (
    <>
    <Header/>
      <Head>
        <title>UseMeWise</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
      <h2 class="pt-5 md:pt-10 pb-3 md:pb-5 font-semibold text-center text-6xl md:text-8xl antialiased hover:subpixel-antialiased tracking-wide text-yellow-400 hover:text-sky-400 ">USE me WISE</h2>
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
      </div>
    </>
  );
}
