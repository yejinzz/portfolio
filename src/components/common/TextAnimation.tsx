import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

const TextAnimation = ({ children }: { children: string }) => {
  return (
    <TextContainer>
      {children.split('').map((el, idx) => (
        <span key={el + idx}>{el}</span>
      ))}
    </TextContainer>
  );
};

export default TextAnimation;

const TextWordAnimation = keyframes`
        0% {
          top: 0;
        }
        20% {
          top: -0.6rem;
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

const TextContainer = styled.div`
  ${tw`
    text-[3rem]
    font-bold
    uppercase
  `}
  & > span {
    ${tw`
    relative
  `}
    animation: ${TextWordAnimation} 3s infinite;
    &:nth-of-type(1) {
      animation-delay: 0.3s;
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
