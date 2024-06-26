import { useRef, useState, useEffect } from 'react';

export const useScrollAnimation = () => {
  const [isInViewport, setIsInViewport] = useState<boolean>(true);
  const firstRef = useRef<HTMLElement | null>(null);
  const LastRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!firstRef.current || !LastRef.current) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const isAnyIntersecting = entries.some((entry) => entry.isIntersecting);

      setIsInViewport(isAnyIntersecting);
    };

    const options = { root: null, rootMargin: '0px', threshold: 0 };

    const observer = new IntersectionObserver(observerCallback, options);
    observer.observe(firstRef.current); // 요소 관찰 시작
    observer.observe(LastRef.current);
    observerCallback([{ isIntersecting: isInViewport }] as IntersectionObserverEntry[]);
    return () => {
      observer.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
    };
  }, []);

  return { isInViewport, firstRef, LastRef };
};
