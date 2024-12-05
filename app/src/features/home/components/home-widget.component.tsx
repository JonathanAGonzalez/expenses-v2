import Image from "next/image";

import abstract from "@/assets/abstract.png";
import { title } from "@/components/primitives";
import { EyeIcon } from "@/app/src/core/components/icons/eye.icon";

export const HomeWidget = () => {
  return (
    <section>
      <article className="grid gap-2 h-32 rounded-2xl p-4 bg-brand-gradient-black-transparent relative">
        <Image
          alt=""
          className="absolute right-4 bottom-0"
          height={124}
          priority={true}
          quality={100}
          src={abstract.src}
          width={142}
        />
        <h2 className="brand-title-gradient-white-to-green font-bold">
          Gastos de Noviembre - 2024
        </h2>

        <div className="flex items-center gap-4">
          <h3
            className={`${title({
              color: "brand-gradient-white-to-gray",
              size: "md",
            })}`}
          >
            $320.00
          </h3>
          <EyeIcon />
        </div>
        <p className="text-sm text-brand-light-green">Ver detalle</p>
      </article>
    </section>
  );
};
