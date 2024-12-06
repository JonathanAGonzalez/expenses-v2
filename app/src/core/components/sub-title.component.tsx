import { ReactNode } from "react";

import { title } from "@/components/primitives";

export const SubTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2
      className={`font-medium ${title({
        color: "brand-white",
        size: "md",
      })}`}
    >
      {children}
    </h2>
  );
};
