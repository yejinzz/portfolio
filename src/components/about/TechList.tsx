import React, { forwardRef } from 'react';
import styled from 'styled-components';
import SubTitle from './SubTitle';
import { StackData } from '../../data/aboutData';

const TechList = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <TechListContainer ref={ref}>
      <SubTitle>Tech Stack</SubTitle>
      <div className="Tech__list-container">
        {Object.entries(StackData.stacks).map(([key, stack], idx) => (
          <div key={idx} className="Tech__list-wrapper" aria-label={`${key} Tech list`}>
            <h2>- {key}</h2>

            <ul>
              {stack.map((item, itemIdx) => (
                <li key={itemIdx} aria-label={`${item}`}>
                  <img className="About__tech-icon" src={`/tech/${item}.svg`} alt={item}></img>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </TechListContainer>
  );
});

export default TechList;

const TechListContainer = styled.div`
  .Tech__list-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem;
  }

  .Tech__list-wrapper {
    > ul {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;

      & > li {
        /* position: relative; */
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border: 1px solid rgb(139, 139, 139);
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      }
    }

    > h2 {
      /* width: fit-content; */
      padding: 0.85rem;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0);
      /* font-size: 1.5rem; */
      margin-bottom: 0.5rem;
    }
  }

  .About__tech-icon {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 768px) {
    /* align-items: left;
    min-height: 100%; */
  }

  @media (max-width: 480px) {
  }
`;
