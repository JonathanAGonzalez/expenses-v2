import { headers } from "next/headers";
import { ReactNode } from "react";

export const IsMobileHoc = ({ children }: { children: ReactNode }) => {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    );

  if (!isMobile) {
    if (!isMobile) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <h3>Conectate desde el celular 😊</h3>
        </div>
      );
    }
  }

  return children;
};
