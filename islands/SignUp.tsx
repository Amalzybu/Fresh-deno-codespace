import { useState,useEffect  } from "preact/hooks";
import { Component ,FunctionComponent} from "preact";
import axiod from "axiod";


type Props = {
    active: string;
    setShowLogin:FunctionComponent;
  };
  export default function SignUp({ active,setShowLogin }: Props) {
    let email="";
    let password="";
    let confirmPassword = "";




    const signup =async ()=>{
        console.debug("ssssssssssssss ",email,password,confirmPassword)
        const af = await axiod.post("/api/register",{
            email:email,
            password:password,
            confirmPassword:confirmPassword

        }).catch((err)=>{
            console.log("hhgggggg ",err)
        });
        console.debug("gggggggggggggggggggggggggg ",af)
    };
    return (
    <div class="flex items-center justify-center shadow-lg">
        
        
        <div class="px-8 py-6 mt-4 text-left bg-white ">
        <div class="flex flex-row flex-row-reverse">
            <div class="basis-1/2    ">
            <button type="button" onclick={()=>setShowLogin("option")} class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" ></path>
              </svg>
            </button>
            </div>
        </div>
        <h3 class="text-2xl font-bold text-center">Login to your account</h3>
        <form action="">
            <div class="mt-4">
                <div>
                    <label class="block" for="email">Email</label>
                    <input type="text" placeholder="Email" value={email} onInput={e =>email = e.target.value} class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"></input>
                    <span class="text-xs tracking-wide text-red-600">Email field is required </span>
                </div>
                <div class="mt-4">
                    <label class="block">Password</label>
                            <input type="password" value={password} onInput={e => password = e.target.value}   placeholder="Password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                </input>
                </div>
                <div class="mt-4">
                    <label class="block">Password</label>
                            <input type="password" placeholder="Password" value={confirmPassword} onInput={e => confirmPassword=e.target.value} class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                </input>
                </div>
                <div class="flex items-baseline justify-between">
                    <button type="button" class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" onclick={signup}>sign up</button>
                    <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
                </div>
            </div>
        </form>
        </div>
    </div>
);
}