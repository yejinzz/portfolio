import styled, { keyframes } from 'styled-components';
import { CircleTextProps } from '../../types/styleTypes';

const TextCircle = ({ children }: { children: string }) => {
  const charArray = [...children];

  return (
    <Contain>
      <Circle>
        {charArray.map((item, idx) => {
          return (
            <CircleText className="circle-text" key={idx} index={idx} $wordLength={charArray.length}>
              {item}
            </CircleText>
          );
        })}
      </Circle>
    </Contain>
  );
};
export default TextCircle;

const Contain = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

const rotateText = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const Circle = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  /* z-index: -996; */
  /* left: 0; */
  top: 0;
  right: 0%;
  animation: ${rotateText} 20s linear infinite;
`;
const CircleText = styled.span<CircleTextProps>`
  position: absolute;
  left: 75px;
  transform: ${(props) => `rotate(${props.index * (360 / props.$wordLength)}deg)`};
  /* -moz-transform-origin: 0 75px;
  -webkit-transform-origin: 0 75px;
  -o-transform-origin: 0 75px;
  -ms-transform-origin: 0 75px; */
  transform-origin: 0 75px;
  text-transform: uppercase;
  font-family: 'Montserrat', 'sans-serif';
  font-weight: 100;
  font-size: 0.8rem;
`;
