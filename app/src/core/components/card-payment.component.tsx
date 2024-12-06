import Image from "next/image";

import { TypeCardPayment } from "../../types/card-payment.types";

import { title as titleStyles } from "@/components/primitives";

export const CardPayment = ({
  title,
  label,
  amount,
  date,
  image,
}: TypeCardPayment) => {
  return (
    <article className="flex justify-between p-4 rounded-2xl bg-brand-gradient-black-transparent">
      <div className="flex gap-4 items-center">
        <Image alt="Netflix" height={49} src={image} width={49} />
        <div>
          <h2 className="font-light">{title}</h2>
          <p className="text-brand-white text-[10px]">{label}</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start">
        <h3
          className={`${titleStyles({
            color: "brand-white",
            size: "md",
            className: "font-bold",
          })}`}
        >
          {amount}
        </h3>
        <p className="text-brand-light-green text-[10px]">{date}</p>
      </div>
    </article>
  );
};
