import Image from "next/image";

import { NavbarButton } from "./navbar-button.component";
import { NavbarCenterButton } from "./navbar-center-button.component";

import bg from "@/assets/navbar-bg.png";
import buttonBg from "@/assets/button-nav.png";
import home from "@/assets/navigation/computer-front-gradient.png";
import user from "@/assets/navigation/boy-front-gradient.png";
import moneyBag from "@/assets/navigation/money-bag-front-gradient.png";
import zoom from "@/assets/navigation/zoom-front-gradient.png";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex items-center justify-center">
      <div className="absolute bottom-1 left-2 z-10">
        <ul className="flex gap-3">
          <NavbarButton iconSrc={home.src} label="Inicio" />
          <NavbarButton iconSrc={zoom.src} label="Categorías" />
        </ul>
      </div>

      <div className="relative w-[450px]">
        <Image
          alt="Navbar Background"
          className="block"
          height={87}
          quality={100}
          src={bg.src}
          width={450}
        />
        <NavbarCenterButton buttonBgSrc={buttonBg.src} />
      </div>

      <div className="absolute bottom-1 right-4 z-10">
        <ul className="flex gap-3">
          <NavbarButton iconSrc={moneyBag.src} label="Gastos" />
          <NavbarButton iconSrc={user.src} label="Perfil" />
        </ul>
      </div>
    </nav>
  );
};
