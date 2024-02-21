import styled, { keyframes } from 'styled-components';
import MouseIcon from '/public/image/svg/mouse_icon.svg?react';
import DoubleArrowDown from '/public/image/svg/arrow_down.svg?react';
const ScrollDown = () => {
  return (
    <ScrollIconWrapper>
      <MouseIcon className="mouse-icon" />
      <DoubleArrowDown className="arrow-icon" />
    </ScrollIconWrapper>
  );
};

export default ScrollDown;

const MovingScroll = keyframes`
      50% {
      transform: translateY(0px);
      opacity: 1;
    }
`;
const FadeInIcon = keyframes`
      50% {
      opacity: 1;
    }
`;
const ScrollIconWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 10px;
  font-size: 3rem;

  .mouse-icon {
    transform: translateY(-20px);
    opacity: 0;
    width: 1.4rem;
    height: 1.4rem;
    animation: ${MovingScroll} 2s infinite 2s;
  }
  .arrow-icon {
    margin: 0.8rem;
    width: 0.7rem;
    height: 0.7rem;
    font-size: ${({ theme }) => theme.fontSize.xl};
    opacity: 0;
    animation: ${FadeInIcon} 2s infinite 2s;
  }
`;
