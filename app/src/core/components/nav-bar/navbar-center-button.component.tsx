import Image from "next/image";
import { Button } from "@nextui-org/button";

interface NavbarCenterButtonProps {
  buttonBgSrc: string;
  onClick?: () => void;
}

export const NavbarCenterButton: React.FC<NavbarCenterButtonProps> = ({
  buttonBgSrc,
  onClick,
}) => {
  return (
    <Button
      isIconOnly
      className="bg-[blue] rounded-full h-[55px] w-[55px] absolute left-1/2 transform -translate-x-1/2 -top-6 flex items-center justify-center shadow-md"
      radius="full"
      onClick={onClick}
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
  );
};
