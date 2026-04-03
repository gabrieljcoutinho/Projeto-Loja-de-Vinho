import React from 'react'
import "../css/header.css"

import imgHeader from "../img/logoHeader.png"

const Header = () => {
  return (
    <div className='header'>
      <img src={imgHeader} alt="" />

      <ul className="listaUlHeader">
        <li className='listaHeader'><a href="#" className='linkLista'>Inicio</a></li>
        <li className='listaHeader'><a href="#" className='linkLista'>Products</a></li>
        <li className='listaHeader'><a href="#" className='linkLista'>Contcto</a></li>
        <li className='listaHeader'><a href="#" className='linkLista'>Sucursales</a></li>
      </ul>

      </div>
  )
}

export default Header