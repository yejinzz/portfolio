import styled from 'styled-components';

interface ProjectListItemProps {
  data: {
    thumbNail: string;
    name: string;
    stack: string[];
    subTitle: string;
  };
}
const ProjectListItem = ({ data }: ProjectListItemProps) => {
  return (
    <ListItemContainer>
      <img src={data.thumbNail}></img>
      <figcaption>
        <h3>{data.name}</h3>
        <TagBox>
          {data.stack.map((item, idx) => (
            <Tag key={idx}>{item}</Tag>
          ))}
        </TagBox>
        <p>{data.subTitle}</p>
      </figcaption>
    </ListItemContainer>
  );
};

export default ProjectListItem;

const ListItemContainer = styled.figure`
  opacity: 0.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: rgb(28, 28, 28);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.604);
  transition: 0.3s ease-in-out;
  transform: scale(0.7);
  figcaption {
    color: #656565;
    h3 {
      color: #ffffff;
    }
  }
  img {
    position: relative;
    /* width: 100%;
    height: 100%; */
    /* height: 350px; */
    width: 500px;
    height: 300px;
    object-fit: cover;
    overflow: hidden;
    transition: 0.3s ease-in-out;
  }
`;

const TagBox = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`;

const Tag = styled.span`
  white-space: nowrap;
  background-color: #0000005f;
  padding: 0.5rem 1rem;
  border: 0.5px solid #bdbdbd;
  border-radius: 20px;
`;
