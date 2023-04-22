import { useState } from "preact/hooks";
import GetStarted from "../components/privacy/GetStarted.tsx";
import HowToUse from "../components/privacy/HowToUse.tsx";
import { Component } from "preact";

type Props = {
    active: string;
  };
  export default function PrivacySidebar({ active }: Props) {

    const [menus, setMenus] = useState<string[]>( [
        "get started",
        "how to use",
         "acceptable use policies",
         "security policies",
         "privacy policies"
    ]);

    const [content,setContent] = useState<Component>(new GetStarted({active:true}));

    function changeContent(tag:string){
      switch(tag){
         case "get started":{
            setContent(new GetStarted({active:true}))
            break;
         }
         case "how to use":{
            setContent(new HowToUse({active:true}))
            break;
         }
         case "acceptable use policies":{
            setContent(new HowToUse({active:true}))
            break;
         }
         case "security policies":{
            setContent(new HowToUse({active:true}))
            break;
         }
         case "privacy policies":{
            setContent(new HowToUse({active:true}))
            break;
         }
         default:{
            setContent(new GetStarted({active:true}))
            break;
         }
      }
      
    }

  
    return (
        <div class="grid grid-flow-col w-full auto-cols-max" >

         <aside id="default-sidebar" class="hidden lg:block  top-0 left-0 z-40 w-64 h-full border-4 border-l-indigo-500 transition-transform " aria-label="Sidebar">
            <div class=" px-3  py-4 ">
               <ul class="space-y-2 font-medium" >
               {menus.map((name, index)=>(
                  <li class="border-4 border-l-indigo-500 rounded-lg" onclick={()=>changeContent(name)} key={index} data-id={index}>
                     
                     <a   class="flex items-center p-2 text-black-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-black group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        <span class="ml-3">{name}</span>
                     </a>
                     
                  </li>))}
                  
               </ul>
            </div>
         </aside>
{content}


</div>


    );
}