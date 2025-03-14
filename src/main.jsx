import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import Header from "./layout/Header/Header.jsx";
import Footer from "./layout/Footer/Footer.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Header/>
          <App />
        <Footer/>
      </BrowserRouter>
  </StrictMode>,
)
