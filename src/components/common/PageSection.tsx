import styled from "styled-components";

const PageSection = ({ children }) => {
  return <Section>{children}</Section>;
};

export default PageSection;
const Section = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  overflow: hidden;
`;
