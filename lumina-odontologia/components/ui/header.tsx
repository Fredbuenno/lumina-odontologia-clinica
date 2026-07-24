import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "./button";

export default function Header() {
  return (
    <header className=" grid grid-cols-[auto_1fr_auto] items-center h-20 px-30 bg-gray-200 text-lg fixed top-0 left-0 w-full z-50">
      <Image
        src="/lumina-odonto.png"
        alt="Logo da Lumina"
        width={200}
        height={100}
        className="h-14 w-auto"
      />

      <NavigationMenu className="justify-self-center">
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Início</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/servico">Serviços</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/sobre">Sobre</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button asChild className="justify-self-end bg-gray-500 text-white hover:bg-gray-600 px-4 py-5 rounded-lg">
        <Link href="/agendar">Agendar Consulta</Link>
      </Button>
    </header>

  );
}