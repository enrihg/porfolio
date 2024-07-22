import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18next from "i18next";
import { I18nextProvider } from 'react-i18next';
import englishContent from "./lang/en.json"
import spanishContent from "./lang/es.json"

i18next.init({
  resources: {
    en: { global: englishContent },
    es: { global: spanishContent },
  },
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
