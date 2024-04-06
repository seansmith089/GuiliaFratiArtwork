import { useState, useEffect } from "react";

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 990;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width, breakpoint };
};

export default useViewport;
