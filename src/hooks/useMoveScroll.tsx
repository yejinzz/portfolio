import { useEffect, useRef } from 'react';

const useMoveScroll = (targetName: string) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const onMoveToTarget = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const targetRect = targetRef.current.getBoundingClientRect();

        if (targetRef.current.offsetTop - 180 < window.scrollY && targetRect.bottom - 180 > 0) {
          document.querySelector(`#${targetName}`)?.classList.add('active');
        } else {
          document.querySelector(`#${targetName}`)?.classList.remove('active');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetRef]);

  return { targetRef, onMoveToTarget, targetName } as const;
};

export default useMoveScroll;
