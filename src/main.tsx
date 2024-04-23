import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import GlobalStyle from './styles/GlobalStyle.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
