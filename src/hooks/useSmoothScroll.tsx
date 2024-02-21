import Lenis from '@studio-freight/lenis';
import { useMemo } from 'react';

const useSmoothScroll = () => {
  const lenis = useMemo(
    () =>
      new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        // smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      }),
    []
  );

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
  return lenis;
};

export default useSmoothScroll;
