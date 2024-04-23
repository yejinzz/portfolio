// import React, { RefObject, useRef } from 'react';
import styled from 'styled-components';
import { useGsapBackGroundCircle } from '../../hooks/useGsap';
import useArrayRef from '../../hooks/useArrayRef';

const BG = () => {
  const [lettersRef, setLettersRef] = useArrayRef<HTMLDivElement>();

  useGsapBackGroundCircle(lettersRef);
  return (
    <CircleContainer>
      {/* <div className="circle-left" />
      <div className="circle-right" />
      <CircleOne ref={setLettersRef} />
      <CircleTwo ref={setLettersRef} /> */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          rgb(39, 40, 41) rgb(97, 103, 122) rgb(216, 217, 218) rgb(255, 246, 224)
          <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
            <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stop-color="rgba(39, 40, 41, 1)"></stop>
            <stop offset="100%" stop-color="rgba(39, 40, 41, 0)"></stop>
          </radialGradient>
          <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
            <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stop-color="rgba(189, 162, 73, 1)"></stop>
            <stop offset="100%" stop-color="rgba(189, 162, 73, 0)"></stop>
          </radialGradient>
          <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
            <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stop-color="rgba(97, 103, 122, 1)"></stop>
            <stop offset="100%" stop-color="rgba(97, 103, 122, 0)"></stop>
          </radialGradient>
          <radialGradient id="Gradient4" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5">
            <animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stop-color="rgba(180, 180, 184, 1)"></stop>
            <stop offset="100%" stop-color="rgba(180, 180, 184, 0)"></stop>
          </radialGradient>
          <radialGradient id="Gradient5" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5">
            <animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stop-color="rgba(216, 217, 218, 1)"></stop>
            <stop offset="100%" stop-color="rgba(216, 217, 218, 0)"></stop>
          </radialGradient>
          <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5">
            <animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
            <stop offset="0%" stop-color="#000000"></stop>
            <stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop>
          </radialGradient>
        </defs>

        <rect
          x="13.744%"
          y="1.18473%"
          width="100%"
          height="100%"
          fill="url(#Gradient1)"
          transform="rotate(334.41 50 50)"
        >
          <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
          <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="7s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect
          x="-2.17916%"
          y="35.4267%"
          width="100%"
          height="100%"
          fill="url(#Gradient2)"
          transform="rotate(255.072 50 50)"
        >
          <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
          <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="12s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect
          x="9.00483%"
          y="14.5733%"
          width="100%"
          height="100%"
          fill="url(#Gradient3)"
          transform="rotate(139.903 50 50)"
        >
          <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
          <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 50 50"
            to="0 50 50"
            dur="9s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </svg>
    </CircleContainer>
  );
};

export default BG;

const CircleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -999;
  overflow: hidden;
  filter: blur(20px);

  .circle-left,
  .circle-right {
    width: 700px;
    height: 700px;
    border: 1px dashed var(--color-main-text);
    opacity: 0.3;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    animation: spin 90s linear infinite;
    @media (max-width: 768px) {
      display: none;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .circle-left {
    top: -40%;
    left: -20%;
  }

  .circle-right {
    bottom: -40%;
    right: -20%;
  }
`;

const CircleOne = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background-color: #efd389;
  filter: blur(20px);
  opacity: 0.5;
  z-index: -2;
  border-radius: 50%;
`;

const CircleTwo = styled.div`
  position: absolute;
  bottom: -40%;
  right: -20%;
  width: 700px;
  height: 700px;
  background-color: #d1a36e;
  filter: blur(20px);
  opacity: 0.5;
  z-index: -2;
  border-radius: 50%;
`;
