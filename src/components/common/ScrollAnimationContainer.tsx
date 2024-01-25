import styled, { keyframes } from "styled-components";
// import { Container } from "./styled";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const ScrollAnimationContainer = ({ children }) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <Container
      ref={ref}
      // animation={animation}
      className={isInViewport ? "frame-in" : ""}
    >
      {children}
    </Container>
  );
};

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100%{
    opacity: 1;
    transform: translateX(0%);
  }
`;

const Container = styled.div`
  /* position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: #ccc;
  overflow: hidden; */

  &.frame-in {
    /* animation: ${({ animation }) => animation} 2s forwards; */
    animation: ${frameInAnimation} 2s forwards;
  }
`;
