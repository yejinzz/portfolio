import { useGSAP } from '@gsap/react';
import gsap, { Expo } from 'gsap';
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

export const useGsapTitle = (items: RefObject<HTMLSpanElement[]>) => {
  useGSAP(() => {
    // console.log(items);

    gsap.fromTo(
      items.current,
      {
        y: 100,
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        // delay: 1,
        ease: 'circ.out',
        stagger: {
          amount: 1,
          from: 'random',
        },
        scrollTrigger: {
          trigger: items.current,
        },
      }
    );
  }, []);
};

export const useGsapEducation = (items: RefObject<HTMLElement[]>) => {
  ScrollTrigger.refresh();
  useGSAP(() => {
    // console.log(items);

    gsap.fromTo(
      items.current,
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        // delay: 0.1,
        ease: 'power4.out',
        stagger: 0.4,
        scrollTrigger: {
          trigger: '.eduction',
          start: 'top center',
          end: 'bottom center',
          markers: true,
          toggleActions: 'restart none none reverse',
        },
      }
    );
  }, []);
};

export const useGsapHeadLineReveal = (items: RefObject<HTMLElement[]>, delay: number = 0) => {
  useGSAP(() => {
    // const el = items.map((item) => item.current);
    console.log(items);

    tl.fromTo(
      items.current,
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        delay,
        ease: 'power4.out',
        stagger: 0.8,
      }
    );
  }, []);
};

export const useGsapAboutReveal = (items: RefObject<HTMLElement[]>, delay: number = 0) => {
  ScrollTrigger.refresh();
  useGSAP(() => {
    gsap.fromTo(
      items.current,
      {
        x: '30%',
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        delay,
        ease: Expo.easeInOut,
        stagger: 0.3,
        scrollTrigger: {
          trigger: items.current,
          start: 'top center',
          // end: 'bottom bottom',
          // markers: true,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
};
export const useGsapAboutCircle = (trigger: RefObject<HTMLElement>) => {
  useGSAP(() => {
    const el: SVGPathElement | null = document.querySelector('#path_line') as SVGPathElement | null;

    if (el) {
      const length = el.getTotalLength();
      el.style.strokeDasharray = length.toString();
      el.style.strokeDashoffset = length.toString();

      gsap.to('#path_line', {
        strokeDashoffset: 0,
        duration: 1.5,
        delay: 2,
        scrollTrigger: {
          trigger: trigger.current,
          start: 'top 10%',
          end: 'bottom bottom',
          toggleActions: 'play none play reverse',
        },
      });
    }
  }, []);
};

export const useGsapBackGroundCircle = (items: RefObject<HTMLDivElement[]>, delay: number = 0) => {
  useGSAP(() => {
    // const el = items.map((item) => item.current);
    tl.fromTo(
      items.current,
      { autoAlpha: 0, scale: 0 },
      {
        autoAlpha: 0.8,
        scale: 1,
        duration: 1,
        delay,
        ease: 'power4.out',
        stagger: 0.5,
      }
    );
  }, []);
};

export const useGsapNavReveal = (items: RefObject<HTMLLIElement[]>, delay: number = 0) => {
  useGSAP(() => {
    console.log(items);

    // const el = items.map((item) => item.current);
    gsap.fromTo(
      items.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 2,
        delay,
        ease: 'power4.out',
        stagger: 0.2,
      }
    );
  }, []);
};

export const useGsapSocialReveal = (el: RefObject<HTMLElement>, delay: number = 0) => {
  useGSAP(() => {
    gsap.fromTo(
      el.current,
      {
        x: -500,
      },
      {
        x: 0,
        duration: 1,
        delay,
        ease: 'power4.out',
      }
    );
  }, []);
};

export const useGsapProjectReveal = (
  left: RefObject<HTMLElement>,
  right: RefObject<HTMLElement>,
  trigger: RefObject<HTMLElement>
) => {
  ScrollTrigger.refresh();
  useGSAP(() => {
    console.log(left, right, trigger);

    const tlProject = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: 'top bottom',
        end: 'bottom center',
        toggleActions: 'play none play reverse',
      },
    });

    tlProject
      .from(left.current, {
        autoAlpha: 0,
        x: -1000,
        duration: 2,
        ease: 'power4.out',
      })
      .from(
        right.current,
        {
          autoAlpha: 0,
          x: 1000,
          duration: 2,
          ease: 'power4.out',
        },
        0.1
      );
  }, []);
};
