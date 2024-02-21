import React, { Dispatch } from 'react';
import styled from 'styled-components';
import { projectDetailProps } from '../../../types/types';
import { createPortal } from 'react-dom';
import StackList from '../../common/StackList';

interface ProjectModalProps {
  detail: projectDetailProps;
  setIsOpenModal: Dispatch<React.SetStateAction<boolean>>;
}
// && detail.id === projectId
const ProjectModal = ({ detail, setIsOpenModal }: ProjectModalProps) => {
  // console.log(detail.id, projectId);
  // team: '팀 프로젝트 ( 프론트엔드 3명 , 백엔드 3명 ) ',
  // period: '2023.06.28 - 2023.07.24',
  // stack: ['React', 'Redux-Toolkit', 'styled-components', 'Axios', 'MUI'],
  // console.log('리렌더링');
  return (
    <>
      {createPortal(
        <>
          <ModalBackground onClick={() => setIsOpenModal(false)} />
          <ModalContainer>
            <DetailContent>
              <h1>{detail.name}</h1>
              <h2>{detail.subTitle}</h2>
              <p>{detail.team}</p>
              <p>{detail.period}</p>
              <StackList stackData={detail.stack} />
              <DetailImg src={detail.imgUrl[0]} />

              <h3>Overview</h3>
              <p>{detail.overview}</p>
            </DetailContent>
          </ModalContainer>
          {/* </ModalBackground> */}
        </>,
        document.body
      )}
    </>
  );
};

export default ProjectModal;
const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4rem;
  /* width: 80vw;
  min-height: 100vh; */
  /* transform: translate(50%, 50%); */
  background-color: #f3f3f3;
  border-radius: 15px;
`;

const DetailContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > h1 {
    font-size: 3rem;
  }
  p {
    white-space: pre-line;
  }
`;

const DetailImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  background-color: #000c;
  /* opacity: 1; */
`;
