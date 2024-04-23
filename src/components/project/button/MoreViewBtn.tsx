import styled from 'styled-components';
import tw from 'twin.macro';

interface ProjectListItemProps {
  dataId: number;
  onClickMoreView: (id: number) => void;
}

const MoreViewBtn = ({ dataId, onClickMoreView }: ProjectListItemProps) => {
  return <Button onClick={() => onClickMoreView(dataId)}>more view</Button>;
};
export default MoreViewBtn;

const Button = styled.button`
  ${tw`
    w-fit
    border-0
    border-b-[0.5px]
    border-solid
    border-gray
    text-gray
    pb-1
  `}

  &:hover {
    ${tw`
      text-white
      border-white
      transition-all
      duration-300
      ease-in-out
    `}
  }
`;
