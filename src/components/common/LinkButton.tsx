import styled from 'styled-components';
import tw from 'twin.macro';
import { ChildrenProps } from '../../types/types';

interface LinkButtonProps extends ChildrenProps {
  link: string;
  name?: string | null;
}

const LinkButton = ({ children, link, name }: LinkButtonProps) => {
  return (
    <a href={link} target="_blank">
      <LinkBtn name={name}>
        {children}
        {name && <p>{name}</p>}
      </LinkBtn>
    </a>
  );
};

export default LinkButton;
const LinkBtn = styled.button<{ name?: string | null }>`
  ${tw`
    flex
    flex-col
    items-center
  `}

  & > svg {
    ${tw`
        w-[40px]
        h-[40px]
        bg-black
        rounded-[10px]
        p-2
        shadow-default
    `}
    path {
      ${tw`
        fill-white
        `}
    }
    &:hover {
      ${tw`
        bg-[#353535]
        transition-all
        duration-200
        ease-out
      `}
    }
  }

  & > p {
    ${({ name }) => name && tw`mt-2`}
  }
`;
