import styled from 'styled-components';
import { CircleTextProps } from '../../types/styleTypes';
import tw from 'twin.macro';

const TextCircle = ({ children }: { children: string }) => {
  const charArray = [...children];

  return (
    <>
      <Circle>
        {charArray.map((item, idx) => {
          const deg = idx * (360 / charArray.length);
          return (
            <CircleText key={idx} deg={deg}>
              {item}
            </CircleText>
          );
        })}
      </Circle>
    </>
  );
};
export default TextCircle;

const Circle = styled.div`
  ${tw`
    w-[120px]
    h-[120px]
    absolute
    top-0
    right-0
    animate-rotateText 
    z-[-1]
    md:w-[150px]
    md:h-[150px]
  `}
`;
const CircleText = styled.span<CircleTextProps>`
  ${tw`
    absolute
    left-[60px]
    origin-[0_60px]
    uppercase
    text-[0.8rem]
    font-thin 
    md:left-[75px]
    md:origin-[0_75px]
  `}
  transform: ${({ deg }) => `rotate(${deg}deg)`};
`;
