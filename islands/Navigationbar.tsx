import IconAlien from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/alien.tsx"
import { useState,useEffect } from "preact/hooks";
type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const [toggle,setToggle] = useState<string>("");
  const [flex,setFlex] = useState<string>("sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden");

  const menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "features", href: "/features" },
    { name: "Privacy", href: "/privacy-policy" },
  ];

  function navToggle(e) {
    console.debug("0000000000000000000000")

    toggle=="open"? setToggle('') :setToggle('open')
    toggle=="open"?  setFlex('sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden') :setFlex('sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 flex')
    // let btn = document.getElementById('menuBtn');
    // let nav = document.getElementById('menu');

    // btn.classList.toggle('open');
    // nav.classList.toggle('flex');
    // nav.classList.toggle('hidden');
  }
  return (

    
      <nav class="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white sm:bg-transparent shadow sm:shadow-none border-t-4 border-pink-600">
    <div class="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
        <a href="" class="no-underline"><img src="/logo.png" alt="AWE.SOME Logo" class="h-[6.25rem]"></img></a>
        <button  className={`hamburger block sm:hidden focus:outline-none  ${toggle}`}  onclick={navToggle} aria-label="Show Menu"><span class="hamburger__top-bun"></span><span class="hamburger__bottom-bun"></span></button>
    </div>
    <div id="menu" className={`w-full sm:w-auto self-end sm:self-center sm:flex flex-col ${flex}`}>
    {menus.map((menu) => (
      <a class="text-gray-800 font-bold hover:text-pink-600 text-lg text-center w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1" href={menu.href}>{menu.name}</a>
          
        ))}
        
        <span id="follow" class="hidden sm:inline-block text-gray-800 font-bold hover:text-pink-600 text-lg sm:w-auto sm:px-4 sm:py-1 cursor-pointer">Follow</span>
            <a href="" class="text-gray-800 font-bold hover:text-pink-600 text-lg text-center w-full no-underline sm:hidden py-2" target="_blank" rel="noopener">trrtrtr</a>
        <a class="text-gray-800 border border-indigo-800 text-lg bg-gray-100 rounded-full w-auto no-underline text-center sm:text-left hover:border-pink-600 hover:text-pink-600 hover:bg-white hover:shadow-md px-6 py-1 my-2 sm:my-0 sm:ml-4" href="#register">Register Now</a>
    </div>
      </nav>

    
  );
}
