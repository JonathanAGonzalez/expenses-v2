import Image from "next/image";

import b from "@/assets/supermarket.png";

export const CardWithBorder = () => {
  return (
    <div className="relative [@media(max-width:400px)]:min-w-[150px] min-w-[189px] min-h-[113px] rounded-2xl p-[2px]">
      <div className="absolute inset-0 bg-[linear-gradient(100.76deg,rgba(244,47,254,0.76)2.05%,rgba(20,19,20,0.76)47.25%,rgba(137,253,145,0.76)96.22%)] rounded-2xl" />
      <div className="relative bg-[#111614] rounded-2xl h-full w-full flex flex-col justify-center items-center p-4">
        <Image alt="" height={49} quality={100} src={b.src} width={33} />
        <h3 className="font-light">Supermercado</h3>
      </div>
    </div>
  );
};
