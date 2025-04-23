import { useEffect, useState } from 'react';

export const useActiveSections = (sectionIds, threshold = 0.5) => {
  const [activeSections, setActiveSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => entry.target.id);
        setActiveSections(visible);
      },
      {
        threshold,
        rootMargin: "-80px 0px 0px 0px", // compensate sticky nav height
      }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sectionIds, threshold]);

  return activeSections;
};
