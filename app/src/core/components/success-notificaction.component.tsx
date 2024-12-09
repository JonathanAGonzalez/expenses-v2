"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { useNotifications } from "../../store/notification.store";

export const SuccessNotification = () => {
  const { isOpenModal } = useNotifications();

  if (!isOpenModal) return null;

  return (
    <div className="text-brand-black flex flex-col items-center justify-center p-6 bg-brand-white shadow-2xl rounded-lg border border-gray-200 w-[90vw] mx-auto fixed bottom-32 z-10">
      <div className="flex items-center justify-center w-40 h-40 mb-4 bg-green-100 rounded-full text-center">
        <DotLottieReact
          autoplay
          src="https://lottie.host/6826b1d0-79df-4f4d-b4ed-e542f4f1bf78/5m0AN6DIvu.lottie"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-1 ">¡Gasto agregado!</h2>
      <p className="text-sm">
        Tu gasto ha sido agregado correctamente, puedes seguir agregando más
        gastos.
      </p>
    </div>
  );
};
