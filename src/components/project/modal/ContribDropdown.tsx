import React, { useState } from 'react';
import DropDownCloseArrow from '/public/image/svg/close_arrow.svg?react';
import DropDownOpenArrow from '/public/image/svg/open_arrow.svg?react';
import styled, { css, keyframes } from 'styled-components';

interface type {
  contrib: {
    title: string;
    description: string;
  };
}

const ContribDropdown = ({ contrib }: type) => {
  const [open, setOpen] = useState<boolean>(false);
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);
  React.useEffect(() => {
    if (open) {
      setOpen(true);
    } else {
      setTimeout(() => {
        setOpen(false);
      }, 400);
    }
  }, [open]);
  return (
    <ContribContainer>
      <ContribTitle onClick={() => setOpen(!open)}>
        <p>{contrib.title}</p>
        <button>
          {open ? <DropDownCloseArrow className="arrow-icon" /> : <DropDownOpenArrow className="arrow-icon" />}
        </button>
      </ContribTitle>
      {open && (
        <ContribContent open={open}>
          <p>{contrib.description}</p>
        </ContribContent>
      )}
    </ContribContainer>
  );
};

export default ContribDropdown;

const ContribContainer = styled.div``;

const ContribTitle = styled.div`
  /* z-index: 2; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  .arrow-icon {
    width: 0.75rem;
    height: 0.75rem;
    margin-left: 0.5rem;
  }
`;

const openDropdown = keyframes`
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(0);
      }
  
`;
const closeDropdown = keyframes`
0% {
        transform: translateY(0);
      }
  100% {
    transform: translateY(-100%);
  }
`;

const ContribContent = styled.div<{ open: boolean }>`
  overflow: hidden;
  margin-top: 0.5rem;
  & > p {
    line-height: 20px;
    animation: ${({ open }) =>
      open
        ? css`
            ${openDropdown} 0.4s ease
          `
        : css`
            ${closeDropdown} 0.4s ease
          `};
  }
`;
