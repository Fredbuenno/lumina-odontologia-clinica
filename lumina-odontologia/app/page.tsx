import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <main>
      <section className=" bg-gray-200 h-20">
        <header className="flex justify-between text-lg mx-50">
          <div>
            <Image
              src="/lumina-odonto.png"
              alt="Logo da Lumina"
              width={100}
              height={100}
              className="mt-4"
            />
          </div>
          <div className="mt-4">
            <NavigationMenu >
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/">
                    Início
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/">
                    Serviços
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/">
                    Sobre
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>
          

        </header>
      </section>
    </main>
  );
}