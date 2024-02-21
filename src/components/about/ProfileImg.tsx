import { RefObject, useEffect, useRef } from 'react';
// import { useGsapGalleryImg, useGsapGalleryTitle, useGsapGalleryCategory } from '../hooks/gsap';
// import gsap from 'gsap';
import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GalleryItem = () => {
  const galleryImg: RefObject<SVGSVGElement> = useRef<SVGSVGElement>(null);
  // const galleryTitle: RefObject<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);

  const useGsapGalleryImg = (item: RefObject<SVGSVGElement>) => {
    useEffect(() => {
      // const el = item.current;

      gsap.fromTo(
        item.current,
        {
          autoAlpha: 0,
          x: '-30%',
        },
        {
          autoAlpha: 1,
          // width: '100%',
          x: 0,
          duration: 1,
          ease: Expo.easeInOut,
          scrollTrigger: {
            trigger: item.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none play reverse',
          },
        }
      );
    }, []);
  };

  // const useGsapGalleryTitle = (item: RefObject<HTMLHeadingElement>, trig: RefObject<SVGSVGElement>) => {
  //   useEffect(() => {
  //     const el = item.current;

  //     gsap.fromTo(
  //       el,
  //       {
  //         // x: 0,
  //         autoAlpha: 0,
  //       },
  //       {
  //         autoAlpha: 1,
  //         x: '30%',
  //         duration: 1,
  //         ease: Expo.easeInOut,
  //         scrollTrigger: {
  //           trigger: trig.current,
  //           start: 'top center',
  //           // markers: true,
  //           end: 'bottom center',
  //           toggleActions: 'play none play none',
  //         },
  //       }
  //     );
  //   }, []);
  // };

  useGsapGalleryImg(galleryImg);
  // useGsapGalleryTitle(galleryTitle, galleryImg);

  return (
    <svg
      ref={galleryImg}
      width="100%"
      height="100%"
      viewBox="0 0 720 660"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <clipPath id="clip">
          <path d="M390.919 0.711056C503.229 -5.20307 629.074 25.2651 692.929 111.277C752.379 191.357 697.791 295.724 681.238 391.771C668.635 464.896 666.176 542.688 609.585 594.858C553.155 646.879 470.305 663.494 390.919 659.409C316.03 655.555 255.454 615.034 195.214 573.533C118.759 520.861 17.3648 479.087 2.43426 391.771C-13.5801 298.117 52.082 211.073 121.318 141.378C193.981 68.2334 283.935 6.3447 390.919 0.711056Z" />
        </clipPath>
      </defs>

      <rect width="100%" height="100%" fill="#bda249" clipPath="url(#clip)" />

      <image
        x="-8%"
        y="4%"
        width="120%"
        height="110%"
        xlinkHref="/image/img.png"
        clipPath="url(#clip)"
        style={{
          filter: 'grayscale(0.7) drop-shadow(-16px 15px 24px #00000090)',
        }}
      />
    </svg>
  );
};

export default GalleryItem;
