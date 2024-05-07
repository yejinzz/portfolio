import { Section as ProjectSection } from '../styles/CommonStyle';
import styled from 'styled-components';
import SectionTitle from '../components/common/SectionTitle';
import { ProjectData } from '../data/projectData';
import ProjectItem from '../components/project/ProjectItem';
import tw from 'twin.macro';
import { TabsProps } from '../types/types';
import { useEffect, useState } from 'react';
import ProjectModal from '../components/project/modal/ProjectModal';

const Project = ({ tabs }: { tabs: TabsProps[] }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<number>(0);

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpenModal]);

  return (
    <>
      {isOpenModal &&
        ProjectData.map((detail, idx) => {
          return detail.id === projectId && <ProjectModal key={idx} detail={detail} setIsOpenModal={setIsOpenModal} />;
        })}

      <ProjectSection ref={tabs[2].targetRef}>
        <SectionTitle>Projects</SectionTitle>
        <ProjectWrapper>
          {ProjectData.map((data, idx) => (
            <ProjectItem key={idx} data={data} setIsOpenModal={setIsOpenModal} setProjectId={setProjectId} />
          ))}
        </ProjectWrapper>
      </ProjectSection>
    </>
  );
};

export default Project;

const ProjectWrapper = styled.div`
  ${tw`
    flex
    flex-col
    gap-20
  `}
`;
