import styled, { keyframes } from 'styled-components';
import { UrlProps } from '../../types/types';

const Background = ({ url }: UrlProps) => {
  return <BackgroundCover url={url}></BackgroundCover>;
};

export default Background;

const BackgroundScale = keyframes`
    50% {
      transform: scale(1.3);
    }
`;
const BackgroundCover = styled.div<UrlProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ url }) => url && `url(${url})`};
  filter: blur(5px);
  background-size: cover;
  opacity: 0.2;
  animation: ${BackgroundScale} 25s infinite;
`;
