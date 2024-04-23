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
  .circle {
    background-color: #bda249;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* filter: blur(2px); */
  }
`;
const CircleText = styled.span<CircleTextProps>`
  ${tw`
    absolute left-[75px] origin-[0_75px] uppercase text-[0.8rem] font-thin 
  `}
  transform: ${({ deg }) => `rotate(${deg}deg)`};
`;
