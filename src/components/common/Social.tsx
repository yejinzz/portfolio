import { RefObject, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useGsapSocialReveal } from '../../hooks/useGsap';
import tw from 'twin.macro';

const Social = ({ isInViewport }: { isInViewport: boolean }) => {
  const SocialRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useGsapSocialReveal(SocialRef, 6);

  return (
    <SocialContainer ref={SocialRef} isInViewport={isInViewport}>
      <span>Github</span>
      <div className="vertical-line" />
      <span>Velog</span>
    </SocialContainer>
  );
};

export default Social;
const fadeInAnimation = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;
const fadeOutAnimation = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
`;

const SocialContainer = styled.div<{ isInViewport: boolean }>`
  ${tw`
  flex
  items-center
  gap-8
  fixed
  top-1/2
  left-0
  ml-6
  text-lg
`}

  animation: ${(props) =>
    props.isInViewport
      ? css`
          ${fadeInAnimation} 0.8s forwards
        `
      : css`
          ${fadeOutAnimation} 0.3s forwards
        `};
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
