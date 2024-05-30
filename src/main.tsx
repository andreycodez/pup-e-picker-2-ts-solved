import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { App } from './App';
import { SectionContextProvider } from './providers/section.provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <SectionContextProvider>
      <App />
    </SectionContextProvider>
  </React.StrictMode>
);
