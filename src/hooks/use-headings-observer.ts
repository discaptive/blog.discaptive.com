import { useEffect, useRef, useState } from "react";

export const useHeadingsObserver = (query: string) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [activeIdList, setActiveIdList] = useState<string[]>([]);
  const [tempId, setTempId] = useState("");

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    const scrollMarginOption = { rootMargin: "-32px 0px -80px 0px" };

    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const targetId = `#${entry.target.id}`;
        if (entry.isIntersecting) {
          setActiveIdList((prev) => {
            if (!prev.includes(targetId)) {
              return [...prev, targetId];
            }
            return prev;
          });
          setTempId(() => "");
        } else {
          setActiveIdList((prev) => {
            if (prev.length === 1) setTempId(targetId);
            return prev.filter((elem) => elem !== targetId);
          });
        }
      });
    };

    observer.current = new IntersectionObserver(
      handleObserver,
      scrollMarginOption
    );

    const elements = document.querySelectorAll(query);

    elements.forEach((elem) => {
      if (elem.id) observer.current?.observe(elem);
    });

    return () => observer.current?.disconnect();
  }, [query]);

  return [...activeIdList, tempId];
};
