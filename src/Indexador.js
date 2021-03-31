import React from 'react'
import { FooterIndexador } from './Componentes/Indexador/FooterIndexador'
import { HeaderIndexador } from './Componentes/Indexador/HeaderIndexador'
import { MainContentIndexador } from './Componentes/Indexador/MainContentIndexador'
import './Styles/indexIndexadorCss.scss';

export const Indexador = () => {
    return (
        <div className="App">
        <div className="pageContainer">
          <HeaderIndexador />
          <MainContentIndexador />
        </div>
        <FooterIndexador />
    </div>
    )
}
