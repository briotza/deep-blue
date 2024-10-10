import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import WebRoutes from './routes/WebRoutes.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WebRoutes />
  </StrictMode>,
)
