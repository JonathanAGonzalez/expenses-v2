import { Payment } from "../../firebase/firebase-get-payments";

import { SubTitle } from "./sub-title.component";
import { CardPayment } from "./card-payment.component";

interface CardPaymentSectionProps {
  subTitle: string;
  items: Payment[];
}

export const CardPaymentSection = ({
  subTitle,
  items,
}: CardPaymentSectionProps) => {
  return (
    <section className="pt-8">
      <SubTitle>{subTitle}</SubTitle>
      <div className="grid gap-3 pt-2 pb-[95px]">
        {items.map((item, index) => (
          <CardPayment {...item} key={index} />
        ))}
      </div>
    </section>
  );
};
