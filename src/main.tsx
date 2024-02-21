import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import './styles/font.css';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme.ts';
import GlobalStyle from './styles/GlobalStyle.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
    {/* <Project /> */}
  </ThemeProvider>
);
