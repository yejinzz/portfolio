import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

export const useGsapPreLoader = (items: RefObject<HTMLSpanElement[]>) => {
  // const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(items.current, {
      opacity: 0,
      y: 100,
      skewY: 50,
      stagger: 0.1,
      ease: 'elastic.out(0.9, 0.8)', // Elastic.easeOut 대신에 gsap에서는 문자열로 사용
    })
      .to(items.current, {
        duration: 1,
        y: 100,
        skewY: -50,
        stagger: 0.1,
        ease: 'Power3.easeOut',
      })
      .to('body', {
        duration: 1,
        css: { overflowY: 'scroll' },
        ease: 'power3.inOut',
      })
      .to(
        '.preloader',
        {
          duration: 1.5,
          height: '0vh',
          ease: 'Power3.easeOut',
          // onComplete: mobileLanding,
        },
        '-=2'
      )
      .to('.preloader', {
        duration: 0,
        css: { display: 'none' },
      });
  }, []);
};
