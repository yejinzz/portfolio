import { useRef, useState, useEffect } from 'react';

// interface ScrollAnimationHookResult {
//   isInViewport: boolean;
//   ref: RefObject<HTMLDivElement>; // 이 부분은 사용하는 요소의 타입에 따라 조절해야 합니다.
// }

export const useScrollAnimation = () => {
  const [isInViewport, setIsInViewport] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 나타났을 경우
          setIsInViewport(true);
        } else {
          // 요소가 뷰포트를 벗어난 경우
          setIsInViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: '0px', threshold: 0 };

    const observer = new IntersectionObserver(observerCallback, options);
    observer.observe(ref.current); // 요소 관찰 시작

    return () => {
      observer.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
    };
  }, []);

  return { isInViewport, ref };
};
