import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

const TitleAnimation = ({ children }: { children: string }) => {
  return (
    <TitleContainer>
      {children.split('').map((el, idx) => (
        <span key={el + idx}>{el}</span>
      ))}
    </TitleContainer>
  );
};

export default TitleAnimation;

const TitleWordAnimation = keyframes`
  /* @keyframes titleWordAni { */
        0% {
          top: 0;
        }
        20% {
          top: -0.4rem;
        }
        40% {
          top: 0;
        }
        60% {
          top: 0;
        }
        80% {
          top: 0;
        }
        100% {
          top: 0;
        }
      
`;

const TitleContainer = styled.div`
  ${tw`
    text-[3rem]
    font-bold
    uppercase
  `}
  /* font-weight: bold;
  font-family: 'Poppins', 'sans-serif';
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 7px;
  background-color: #bda249;
  width: 100px;
  height: 100px; */
  /* text-transform: uppercase; */
  & > span {
    position: relative;
    animation: ${TitleWordAnimation} 3s infinite;
    /* color: #d2d2d2; */
    &:nth-of-type(1) {
      animation-delay: 0.3s;
      /* color: #ffffff; */
    }
    &:nth-of-type(2) {
      animation-delay: 0.6s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.9s;
    }
    &:nth-of-type(4) {
      animation-delay: 1.2s;
    }
    &:nth-of-type(5) {
      animation-delay: 1.5s;
    }
    &:nth-of-type(6) {
      animation-delay: 1.8s;
    }
    &:nth-of-type(7) {
      animation-delay: 2.1s;
    }
    &:nth-of-type(8) {
      animation-delay: 2.4s;
    }
    &:nth-of-type(9) {
      animation-delay: 2.7s;
    }
  }
`;
