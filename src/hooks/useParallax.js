import { useState, useEffect } from "react";

const useParallaxEffect = (threshold = 125) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    window.requestAnimationFrame(() => {
      const scrollPosition = window.scrollY;
      setOffset(scrollPosition > threshold ? scrollPosition - threshold : 0);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return offset;
};

export default useParallaxEffect;
