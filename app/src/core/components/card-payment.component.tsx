import Image from "next/image";

import netflix from "@/assets/netflix.png";
import { title } from "@/components/primitives";

export const CardPayment = () => {
  return (
    <article className="flex justify-between p-4 rounded-2xl bg-brand-gradient-black-transparent">
      <div className="flex gap-4 items-center">
        <Image alt="Netflix" height={49} src={netflix.src} width={49} />
        <div>
          <h2 className="font-light">Netflix</h2>
          <p className="text-brand-white text-[10px]">Stream</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start">
        <h3
          className={`${title({
            color: "brand-white",
            size: "md",
            className: "font-bold",
          })}`}
        >
          $320.000
        </h3>
        <p className="text-brand-light-green text-[10px]">Martes 10 Nov</p>
      </div>
    </article>
  );
};
