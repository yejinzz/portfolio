import styled from 'styled-components';
// import { projectDataProps } from '../../types/types';

interface ProjectListItemProps {
  dataId: number;
  onClickMoreView: (id: number) => void;
}

const Button = ({ dataId, onClickMoreView }: ProjectListItemProps) => {
  return <Btn onClick={() => onClickMoreView(dataId)}>more view</Btn>;
};
export default Button;
const Btn = styled.button`
  width: fit-content;
  border-bottom: 0.5px solid #6b6b6b;
  background-color: transparent;
  /* border-radius: 20px; */
`;
