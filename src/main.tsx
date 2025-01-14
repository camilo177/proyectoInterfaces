import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './assets/styles/index.css';
import { BrowserRouter } from 'react-router-dom';

import './i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
