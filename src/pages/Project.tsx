import { Section } from '../styles/CommonStyle';
import styled from 'styled-components';
import SectionTitle from '../components/common/SectionTitle';
import { ProjectData } from '../data/projectData';
import ProjectItem from '../components/project/ProjectItem';

const Project = () => {
  return (
    <Section>
      <SectionTitle>Project</SectionTitle>
      <ProjectWrapper>
        {ProjectData.map((data, idx) => (
          <ProjectItem key={idx} data={data} />
        ))}
      </ProjectWrapper>
    </Section>
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
