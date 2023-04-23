
type Props = {
    active: string;
  };
  export default function HowToUse({ active }: Props) {




    // const increment = useCallback(() => {
    //     setValue(value + 1);
    // }, [value]);
    
    // const menus= ["get started","how to use" ];
  
    return (

<main class="container min-w-fit
flex flex-col  w-screen sm:px-6 md:pr-[10px] lg:pr-[20%]">
<div class="col-span-4 w-full h-full flex flex-col pt-5 ">
    <div class="flex flex-col gap-5">
        <h1 class="text-4xl font-semibold text-[transparent] bg-gradient-to-r from-[#8f45a9] via-[#504aa7] to-[#7a81eb] bg-clip-text">
            How to use
            </h1>
            <section class="flex flex-col gap-3 text-[#524a79]">
                <p>Welcome to D3no Data's documentation!</p>
                <p>yeah you can write something here</p>
            </section>
            </div>
            </div>
</main>



    );
}