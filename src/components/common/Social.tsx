import { RefObject, useRef } from 'react';
import styled from 'styled-components';
import { useGsapSocialReveal } from '../../hooks/useGsap';
import tw from 'twin.macro';
// { isInViewport }: { isInViewport: boolean }
const Social = () => {
  const SocialRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useGsapSocialReveal(SocialRef, 6);

  return (
    <SocialContainer ref={SocialRef}>
      <span>Github</span>
      <div className="vertical-line" />
      <span>Velog</span>
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
