import { Section } from '../styles/CommonStyle';
import styled from 'styled-components';
import SectionTitle from '../components/common/SectionTitle';
import { ProjectData } from '../data/projectData';
import ProjectItem from '../components/project/ProjectItem';
import { useCallback, useState } from 'react';
import ProjectModal from '../components/project/modal/ProjectModal';
// import { projectDetailData } from '../data/projectDetailData';
// import { projectDataProps } from '../types/types';

const Project = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<number>(0);

  // const onClickMoreView = (id: number) => {
  //   setOpenModal(true);
  //   setProjectId(id);
  // };

  const onClickMoreView = useCallback(
    (id: number) => {
      setIsOpenModal(true);
      setProjectId(id);
    },
    [setIsOpenModal, setProjectId]
  );
  console.log(isOpenModal, projectId);
  return (
    <>
      {isOpenModal &&
        ProjectData.map((detail, idx) => {
          return detail.id === projectId && <ProjectModal key={idx} detail={detail} setIsOpenModal={setIsOpenModal} />;
        })}
      <Section>
        <SectionTitle>Projects</SectionTitle>
        <ProjectWrapper>
          {ProjectData.map((data, idx) => (
            <div key={idx}>
              <ProjectItem data={data} onClickMoreView={onClickMoreView} />
              {/* <Button dataId={data.id} onClickMoreView={onClickMoreView} /> */}
            </div>
          ))}
        </ProjectWrapper>
      </Section>
    </>
  );
};

export default Project;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* grid-template-columns: repeat(2,minmax(0,1fr)); */
  gap: 10rem;
  margin: 5rem 0;
`;
