import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};


 html{
  /* font-size: 80%;  */
  @media (max-width:768px){
      font-size: 58%;
    }
  @media (max-width: 500px){
      font-size: 55.125%;
    }
 }

 *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;

    color: var(--color-main-text);
    /* color: inherit;      */
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  a, img{
    display: block;
  }
  button{
    outline: none;
    appearance: none;
    border: none;
  }
  body{
    font-family: 'Pretendard','sans-serif';
    /* font-size: 1.4rem; */
    background-color:#222;
    overflow-y: hidden;
    
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', 'sans-serif';
    font-weight:700;
  }

/* h1{
  font-size: 4rem;
} */
//삭제해야함
#home{
  /* background-color:#F8F0E5; */
  /* background-color:#bda249; */
  /* z-index:-999; */
}

.text-container{
  font-family: 'Poppins', 'sans-serif';
  font-size: 5rem;
}

.gallery-item-title {
  position: absolute;
  /* width: 100%; */
  top: 50%;
  right: 10%;
  /* font-size: 5rem; */
  line-height: 1.2;
  /* mix-blend-mode: color-dodge; */
  z-index: 5;
  @media (max-width: 768px) {
      font-size: 2rem;
  }
}
`;

export default GlobalStyle;
