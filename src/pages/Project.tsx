import { Section as ProjectSection } from '../styles/CommonStyle';
import styled from 'styled-components';
import SectionTitle from '../components/common/SectionTitle';
import { ProjectData } from '../data/projectData';
import ProjectItem from '../components/project/ProjectItem';
import tw from 'twin.macro';

const Project = () => {
  return (
    <ProjectSection>
      <SectionTitle>Projects</SectionTitle>
      <ProjectWrapper>
        {ProjectData.map((data, idx) => (
          <div key={idx}>
            <ProjectItem data={data} />
          </div>
        ))}
      </ProjectWrapper>
    </ProjectSection>
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
