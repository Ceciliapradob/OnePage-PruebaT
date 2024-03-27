import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importa los estilos de Bootstrap Icons
import { Header } from './componentes/Header/Header.jsx'
import { Main } from './componentes/Main/Main.jsx'
import { Services } from './componentes/Services/Services.jsx';
import CuttingEdge from './componentes/CuttingEdge/CuttingEdge.jsx';
import { SectionLogos } from './componentes/SectionLogos/SectionLogos.jsx';
import { Footer } from './componentes/Footer/Footer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Main />
    <Services />
    <CuttingEdge />  
    <SectionLogos /> 
    <Footer />
  </React.StrictMode>,
)
