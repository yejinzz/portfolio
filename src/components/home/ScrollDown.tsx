import styled from 'styled-components';
import MouseIcon from '/public/image/svg/icon/mouse_icon.svg?react';
import DoubleArrowDown from '/public/image/svg/icon/arrow_down.svg?react';
import tw from 'twin.macro';

const ScrollDown = () => {
  return (
    <ScrollIconWrapper>
      <MouseIcon className="mouse-icon" />
      <DoubleArrowDown className="arrow-icon" />
    </ScrollIconWrapper>
  );
};

export default ScrollDown;

const ScrollIconWrapper = styled.div`
  ${tw`
    absolute
    flex
    flex-col
    items-center
    bottom-0
  `}
  .mouse-icon {
    ${tw`
      w-6
      h-6
      opacity-0
      translate-y-3
      animate-scrollDown
    `}
  }
  .arrow-icon {
    ${tw`
      w-3
      h-3
      m-3.5
      opacity-0
      animate-fadeIn
    `}
  }
`;
