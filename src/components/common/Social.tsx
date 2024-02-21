import { RefObject, useRef } from 'react';
import styled from 'styled-components';
import { useGsapSocialReveal } from '../../hooks/useGsap';

const Social = () => {
  const SocialRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useGsapSocialReveal(SocialRef, 6);
  return (
    <SocialContainer ref={SocialRef}>
      <li>Github</li>
      <div className="vertical-line" />
      <li>Velog</li>
    </SocialContainer>
  );
};

export default Social;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: fixed;
  top: 60%;
  margin: 2rem;
  transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  transform-origin: center left;
  /* font-family: 'Montserrat', 'sans-serif'; */
  font-size: ${({ theme }) => theme.fontSize.lg};
  /* z-index: 999; */
  .vertical-line {
    background-color: #ffffff;
    width: 50px;
    height: 1px;
  }
`;
