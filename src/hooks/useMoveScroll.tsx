import { useEffect, useRef } from 'react';

//hook
const useMoveScroll = (targetName: string) => {
  // const [isTarget, setIsTarget] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const onMoveToTarget = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    // setIsTarget(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // setIsTarget(false);
      if (targetRef.current) {
        const targetRect = targetRef.current.getBoundingClientRect();

        console.log(targetRef.current.offsetTop - 180 < window.scrollY, targetRect.bottom - 180 > 0);
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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (targetRef.current) {
  //       // const rect = targetRef.current.getBoundingClientRect();
  //       // console.log(targetRef);
  //       console.log('handleScroll called');
  //       console.log('Scroll position:', document.documentElement.scrollTop);
  //       console.log('Element offsetTop:', targetRef.current.offsetTop);
  //       console.log('Element offsetHeight:', targetRef.current.offsetHeight);

  //       // const offsetTop = targetRef.current.offsetTop;
  //       // const offsetHeight = targetRef.current.offsetHeight;
  //       // const scrollTop = document.documentElement.scrollTop;
  //       if (
  //         targetRef.current.offsetTop <= document.documentElement.scrollTop &&
  //         targetRef.current.offsetTop + targetRef.current.offsetHeight > document.documentElement.scrollTop
  //       ) {
  //         setIsTarget(true);
  //       } else {
  //         setIsTarget(false);
  //       }
  //     }
  //   };
  //   console.log('Adding scroll event listener');
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     console.log('Removing scroll event listener');
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [targetRef, setIsTarget]);

  return { targetRef, onMoveToTarget, targetName } as const;
};

export default useMoveScroll;
