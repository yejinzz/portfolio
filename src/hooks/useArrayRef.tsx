import { useCallback, useEffect, useRef } from 'react';

const useArrayRef = <T extends HTMLElement>() => {
  const elementsRef = useRef<T[]>([]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 배열을 초기화
    elementsRef.current = [];
  }, []);

  const setElementRef = useCallback((ref: T | null) => {
    if (ref) {
      elementsRef.current.push(ref);
    }
    console.log(elementsRef.current);
  }, []);

  return [elementsRef, setElementRef] as const;
};

export default useArrayRef;
