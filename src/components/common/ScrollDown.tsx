import styled, { keyframes } from "styled-components";
import { BsMouse } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const ScrollDown = () => {
  return (
    <ScrollIconWrapper>
      <BsMouse className="mouse-icon" />
      <MdKeyboardDoubleArrowDown className="arrow-icon" />
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
    font-size: 2.5rem;
    animation: ${MovingScroll} 2s infinite 2s;
  }
  .arrow-icon {
    margin-top: 5px;
    font-size: 2rem;
    color: #666;
    opacity: 0;
    animation: ${FadeInIcon} 2s infinite 2s;
  }
`;
