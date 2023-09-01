
type Props = {
    active: string;
  };
  export default function CreateTask({ active }: Props) {




    // const increment = useCallback(() => {
    //     setValue(value + 1);
    // }, [value]);
    
    // const menus= ["get started","how to use" ];
  
    return (

<main class="container min-w-fit
flex flex-col  w-screen sm:px-6 md:pr-[10px] lg:pr-[20%]">
<div class="col-span-4 w-full h-full flex flex-col pt-5 "><div class="flex flex-col gap-5">
  <div class="grid grid-cols-3 gap-3">
  <div> <label class="block">
    <span class="block text-sm font-medium text-slate-700">Task Name</span>
    <input type="email" class="peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label></div>
  <div><label class="block">
    <span class="block text-sm font-medium text-slate-700">hours needed</span>
    <input type="number" class="peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label></div>
  <div><label class="block">
    <span class="block text-sm font-medium text-slate-700">maximum hours for completion</span>
    <input type="number" class="peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label></div>
  <div><label class="block">
    <span class="block text-sm font-medium text-slate-700">points</span>
    <input type="number" class="peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label></div>
  <div><label class="block">
    <span class="block text-sm font-medium text-slate-700">Description</span>
    <textarea  class="peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label></div>
  <div><label class="block">
    <span class="block text-sm font-medium text-slate-700">Dependencies</span>
    <input type="email" class="peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label></div>
</div>
  <div class=" flex flex-col grid grid-cols-3 gap-3 flex-row-reverse">
  <div>
  <button class="rounded-full bg-gradient-to-r from-red-500 border-4 border-indigo-200 border-x-indigo-500">Save Changes</button>
  </div>
  <div>
  <button class="rounded-full bg-gradient-to-r from-indigo-500 border-4 border-indigo-200 border-x-indigo-500">cancel Changes</button>
  </div>
</div>
  </div></div>

</main>


    );
}