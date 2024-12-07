import { headers } from "next/headers";
import { ReactNode } from "react";

export const IsMobileHoc = ({ children }: { children: ReactNode }) => {
  const headersList = headers(); // Accede a los headers de la solicitud
  const userAgent = headersList.get("user-agent") || "";
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    );

  if (!isMobile) {
    if (!isMobile) {
      return <h2>Solamente en celular</h2>;
    }
  }

  return children;
};
