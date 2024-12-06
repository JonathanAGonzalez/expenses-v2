import { useState, useEffect } from "react";

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();

      //
      const mobileRegex =
        /iphone|ipod|android|windows phone|blackberry|mobile|opera mini/i;

      setIsMobile(mobileRegex.test(userAgent));
    };

    checkMobile();
  }, []);

  return isMobile;
};
