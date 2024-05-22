import styled from 'styled-components';
import tw from 'twin.macro';
import { ChildrenProps } from '../../types/types';

interface LinkButtonProps extends ChildrenProps {
  link: string;
  name?: string | null;
  label?: string;
}

const LinkButton = ({ children, link, name, label }: LinkButtonProps) => {
  return (
    <LinkBtn name={name}>
      <a href={link} target="_blank" aria-label={label}>
        {children}
      </a>
      {name && <p>{name}</p>}
    </LinkBtn>
  );
};

export default LinkButton;
const LinkBtn = styled.button<{ name?: string | null }>`
  ${tw`
    flex
    flex-col
    items-center
  `}

  a > svg {
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
