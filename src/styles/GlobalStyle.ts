import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};


 html{
  /* font-size: 80%;  */
  /* @media (max-width:768px){
      font-size: 58%;
    }
  @media (max-width: 500px){
      font-size: 55.125%;
    } */
 }

 *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
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
    background-color:#222;
    color: #fff;
    /* overflow-y: hidden; */
    
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', 'sans-serif';
    font-weight:900;
  }

.active{
  color:#fff;
}
`;

export default GlobalStyle;
