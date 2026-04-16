import { useEffect, useState } from "react";

export const useIsMobile = (threshold: number = 780): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = (): void => {
    console.log("handling resize, width =", window.outerWidth);
    if (window.outerWidth < threshold) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
