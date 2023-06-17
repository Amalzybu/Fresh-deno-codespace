import { useState } from "preact/hooks";
import { Component } from "preact";

type Props = {
    active: string;
  };
  export default function UserSidebar({ active }: Props) {

    const [menus, setMenus] = useState<string[]>( [
        "Create Task",
        "Show My Tasks",
         "Weekly Tasks",
         "Calender",
         "Scheduled Tasks",
         "Logout"
    ]);
    console.debug("ffffffffffffffffffffffffffffffffffff")
    const [content,setContent] = useState<Component>();

   const changeContent =  (tag)=>{
        console.debug("gggggggggggggggggggggggggg ")
      switch(tag){
         case "Create Task":{
            // setContent(new GetStarted({active:true}))
            break;
         }
         case "Show My Tasks":{
            // setContent(new HowToUse({active:true}))
            break;
         }
         case "Weekly Tasks":{
            // setContent(new HowToUse({active:true}))
            break;
         }
         case "Calender":{
            // setContent(new HowToUse({active:true}))
            break;
         }
         case "Scheduled Tasks":{
            // setContent(new HowToUse({active:true}))
            break;
         }
         case "Logout":{
            // setContent(new HowToUse({active:true}))
            console.debug("logout ")
            location.href ="/api/logout";
            break;
         }
         default:{
            // setContent(new GetStarted({active:true}))
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
                  <li class="border-4 border-l-indigo-500 rounded-lg" onclick={()=>{changeContent(name)}} key={index} data-id={index}>
                     
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