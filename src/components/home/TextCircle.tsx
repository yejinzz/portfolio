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
    w-[150px] h-[150px] absolute -top-5 -right-5 animate-rotateText 
  `}
`;
const CircleText = styled.span<CircleTextProps>`
  ${tw`
    absolute left-[75px] origin-[0_75px] uppercase text-[0.8rem] font-thin 
  `}
  transform: ${({ deg }) => `rotate(${deg}deg)`};
`;
