import { RefObject, useRef } from 'react';
import styled from 'styled-components';
import { useGsapSocialReveal } from '../../hooks/useGsap';
import tw from 'twin.macro';
// { isInViewport }: { isInViewport: boolean }

const Social = () => {
  const SocialRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useGsapSocialReveal(SocialRef);

  return (
    <SocialContainer ref={SocialRef}>
      <a href="https://github.com/yejinzz" target="_blank">
        <span>Github</span>
      </a>
      <div className="vertical-line" />
      <a href="https://velog.io/@yejin1320" target="_blank">
        <span>Velog</span>
      </a>
    </SocialContainer>
  );
};

export default Social;

const SocialContainer = styled.div`
  ${tw`
  flex
  items-center
  gap-8
  fixed
  top-1/2
  left-0
  ml-6
  text-lg
  max-md:hidden
  z-10
`}
  transform-origin: left top;
  transform: rotate(-90deg) translateX(-50%);
  .vertical-line {
    ${tw`
      bg-white
      h-px
      w-12
    `}
  }
`;
