import { useEffect, useRef } from "react";

export const useReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("reveal-show");
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return ref;
};
