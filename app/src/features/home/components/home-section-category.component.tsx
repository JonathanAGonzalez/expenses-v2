import { HomeHeaderTitleCategory } from "./home-header-title-category.component";

import { CardWithBorder } from "@/app/src/core/components/card-with-border.component";

export const HomeSectionCategory = () => {
  return (
    <>
      <HomeHeaderTitleCategory />
      <section className="grid grid-cols-2 gap-y-2 gap-x-5 pt-2 [@media(max-width:383px)]:grid-cols-1">
        <CardWithBorder />
        <CardWithBorder />
        <CardWithBorder />
        <CardWithBorder />
      </section>
    </>
  );
};
