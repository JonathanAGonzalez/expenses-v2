import { CardPayment } from "@/app/src/core/components/card-payment.component";
import { SubTitle } from "@/app/src/core/components/sub-title.component";

export const HomeSectionLastAdded = () => {
  return (
    <section className="pt-8">
      <SubTitle>Ultimos agregados</SubTitle>
      <div className="grid gap-3 pt-2 pb-[95px]">
        <CardPayment />
        <CardPayment />
        <CardPayment />
        <CardPayment />
        <CardPayment />
        <CardPayment />
        <CardPayment />
      </div>
    </section>
  );
};
