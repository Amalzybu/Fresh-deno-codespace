import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>UseMeWise</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
      <h2 class="pt-5 md:pt-10 pb-3 md:pb-5 text-center text-6xl md:text-8xl font-black">LDkit</h2>
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
