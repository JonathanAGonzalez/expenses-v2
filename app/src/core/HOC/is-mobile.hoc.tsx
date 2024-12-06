"use client";

import { ReactNode } from "react";

import { useMobile } from "../hooks/is-mobile.hook";

export const IsMobileHoc = ({ children }: { children: ReactNode }) => {
  const isMobile = useMobile();

  if (!isMobile) {
    if (!isMobile) {
      return <h2>Solamente en celular</h2>;
    }
  }

  return children;
};
