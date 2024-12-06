import { HomeWidget } from "./src/features/home/components/home-widget.component";
import { Navbar } from "./src/core/components/nav-bar";
import { HomeSectionCategory } from "./src/features/home/components/home-section-category.component";
import { HomeSectionLastAdded } from "./src/features/home/components/home-section-last-added.component";
import { categoriesDefault } from "./src/core/categories-default";

export default function Home() {
  return (
    <>
      <section>
        <HomeWidget />
        <HomeSectionCategory items={categoriesDefault} />
        <HomeSectionLastAdded />
      </section>
      <Navbar />
    </>
  );
}
