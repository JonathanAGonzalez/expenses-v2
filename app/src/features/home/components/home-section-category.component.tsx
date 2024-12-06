import { HomeHeaderTitleCategory } from "./home-header-title-category.component";

import { TypeCardWithBorder } from "@/app/src/types/card-with-border.types";
import { CardWithBorder } from "@/app/src/core/components/card-with-border.component";

interface HomeSectionCategoryProps {
  items: TypeCardWithBorder[];
}

export const HomeSectionCategory = ({ items }: HomeSectionCategoryProps) => {
  return (
    <>
      <HomeHeaderTitleCategory />
      <section className="grid grid-cols-2 gap-y-2 gap-x-5 pt-2 [@media(max-width:383px)]:grid-cols-1">
        {items.map((item) => (
          <CardWithBorder {...item} key={item.id} />
        ))}
      </section>
    </>
  );
};
