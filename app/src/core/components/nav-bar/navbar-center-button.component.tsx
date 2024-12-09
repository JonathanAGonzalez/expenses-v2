import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";

interface NavbarCenterButtonProps {
  buttonBgSrc: string;
  href: string;
}

export const NavbarCenterButton: React.FC<NavbarCenterButtonProps> = ({
  buttonBgSrc,
  href,
}) => {
  return (
    <Link href={href}>
      <Button
        isIconOnly
        className="bg-[blue] rounded-full h-[55px] w-[55px] absolute left-1/2 transform -translate-x-1/2 -top-6 flex items-center justify-center shadow-md"
        radius="full"
      >
        <Image
          alt="Center Button"
          className="rounded-full min-w-[55px] h-full"
          height={55}
          quality={100}
          src={buttonBgSrc}
          width={55}
        />
      </Button>
    </Link>
  );
};
