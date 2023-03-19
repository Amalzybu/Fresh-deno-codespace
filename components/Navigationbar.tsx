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
    <div class=" mx-auto flex gap-3 py-6 px-8  justify-between ">
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
    </div>
  );
}
