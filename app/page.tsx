import { CardPayment } from "./src/core/components/card-payment.component";
import { CardWithBorder } from "./src/core/components/card-with-border.component";
import { SubTitle } from "./src/core/components/sub-title.component";
import { HomeHeaderTitleCategory } from "./src/features/home/components/home-header-title-category.component";
import { HomeWidget } from "./src/features/home/components/home-widget.component";
import { Navbar } from "./src/core/components/nav-bar";

export default function Home() {
  return (
    <>
      <section>
        <HomeWidget />
        <HomeHeaderTitleCategory />
        <section className="grid grid-cols-2 gap-y-2 gap-x-5 pt-2 [@media(max-width:383px)]:grid-cols-1">
          <CardWithBorder />
          <CardWithBorder />
          <CardWithBorder />
          <CardWithBorder />
        </section>
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
      </section>
      <Navbar />
    </>
  );
}
