import { SubTitle } from "@/app/src/core/components/sub-title.component";
import { title } from "@/components/primitives";

export const HomeHeaderTitleCategory = () => {
  return (
    <div className="flex justify-between items-center pt-8">
      <SubTitle>Categorias</SubTitle>
      <p
        className={`font-medium ${title({
          color: "brand-white",
          className: "font-medium",
          size: "sm",
        })}`}
      >
        Explorar todas
      </p>
    </div>
  );
};
