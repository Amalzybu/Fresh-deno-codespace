import IconAlien from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/alien.tsx"
type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "item1", href: "/components" },
    { name: "item2", href: "/docs" },
  ];

  return (
    <header class="px-3 lg:px-14 h-12 lg:h-20 text-gray-500 flex justify-between items-center" >
      <div class="flex items-center flex-1">
        <IconAlien />
        
        <div class="text-2xl text-red-600 ml-1 font-bold">
        UseMeWise

        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-red-600 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
