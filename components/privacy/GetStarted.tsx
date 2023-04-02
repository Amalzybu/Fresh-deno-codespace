
type Props = {
    active: string;
  };
  export default function GetStarted({ active }: Props) {




    // const increment = useCallback(() => {
    //     setValue(value + 1);
    // }, [value]);
    
    // const menus= ["get started","how to use" ];
  
    return (

<main class="container  flex flex-col  w-4/5">
<div class="col-span-4 w-full h-full flex flex-col pt-5 pl-5"><div class="flex flex-col gap-5"><h1 class="text-4xl font-semibold text-[transparent] bg-gradient-to-r from-[#8f45a9] via-[#504aa7] to-[#7a81eb] bg-clip-text">Get Started</h1><section class="flex flex-col gap-3 text-[#524a79]"><p>Welcome to D3no Data's documentation!</p><p>Every chart is customizable, as the goal is to make data visualization simpler in Fresh without sacrificing the power or customizability of D3. Where applicable, charts also support animation, interactivity, and multiple data sets.</p><p>To get started, navigate to the page of the chart you'd like to import in the sidebar. Use the code fragment at the top of that page in order to import it into any project using Deno &amp; Preact.</p><p>Please note that D3no Data is still in development, so all charts may not be working fully as intended. If you notice any issues, please report them on GitHub (linked in the navigation bar).</p><p>Thanks for using our library!</p></section></div></div>
</main>



    );
}