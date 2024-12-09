import { HomeWidget } from "./src/features/home/components/home-widget.component";
import { HomeSectionCategory } from "./src/features/home/components/home-section-category.component";
import { HomeSectionLastAdded } from "./src/features/home/components/home-section-last-added.component";
import { homeSectionCategoriesDefault } from "./src/core/categories-default";
import { getPayments, Payment } from "./src/firebase/firebase-get-payments";

export default async function Home() {
  const payments: Payment[] = await getPayments();

  return (
    <>
      <section>
        <HomeWidget />
        <HomeSectionCategory items={homeSectionCategoriesDefault} />
        <HomeSectionLastAdded payments={payments} />
      </section>
    </>
  );
}
