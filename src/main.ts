import '@fontsource-variable/sora';
import '@fontsource/jetbrains-mono';
import './i18n/config';
import './style.css';
import { StrictMode, createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './app';

const rootElement = document.getElementById('app');

if (!rootElement) {
  throw new Error('Root element #app not found');
}

createRoot(rootElement).render(
  createElement(
    StrictMode,
    null,
    createElement(HelmetProvider, null, createElement(App)),
  ),
);
