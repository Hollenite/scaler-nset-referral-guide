import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ReferralCodePage from './pages/ReferralCodePage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReferralCodePage />
  </StrictMode>,
);
