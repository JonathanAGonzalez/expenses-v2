import Image from "next/image";

import { Payment } from "../../firebase/firebase-get-payments";
import { formatTimestamp } from "../utils/formatTime.util";

import { SwipeElement } from "./swipe.component";

import { title as titleStyles } from "@/components/primitives";

export const CardPayment = ({ category, date, name, price }: Payment) => {
  return (
    <SwipeElement
      content={
        <article className="flex justify-between p-4 rounded-2xl bg-brand-gradient-black-transparent">
          <div className="flex gap-4 items-center">
            <Image
              alt="Netflix"
              height={49}
              src={category.image.toString()}
              width={49}
            />
            <div>
              <h2 className="font-light">{name}</h2>
              <p className="text-brand-white text-[10px]">{category.label}</p>
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
              {/* Format price */}
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(Number(price))}
            </h3>
            <p className="text-brand-light-green text-[10px]">
              {formatTimestamp(date)}
            </p>
          </div>
        </article>
      }
    />
  );
};
