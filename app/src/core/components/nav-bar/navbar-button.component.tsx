import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

import { TypeNavbarButton } from "@/app/src/types/navbar-button.types";

export const NavbarButton: React.FC<TypeNavbarButton> = ({
  label,
  iconSrc,
  href,
  onClick,
}) => {
  return (
    <li className="text-[12px] [@media(max-width:400px)]:w-[65px] w-[70px] h-[61px] flex flex-col justify-center items-center">
      <Link href={href}>
        <Button
          disableAnimation
          className="flex w-[70px] h-[61px] flex-col justify-center items-center bg-[transparent]"
          onClick={onClick}
        >
          <Image
            alt={label}
            height={25}
            quality={100}
            src={iconSrc}
            width={25}
          />
          {label}
        </Button>
      </Link>
    </li>
  );
};
