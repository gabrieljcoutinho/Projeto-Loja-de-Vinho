import React from 'react'
import "../css/header.css"

import imgHeader from "../img/logoHeader.png"

const Header = () => {
  return (
    <div className='header'>
      <img src={imgHeader} alt="" className='imgHeader' />

      <ul className="listaUlHeader">
        <li className='listaHeader'><a  className='linkLista'>Inicio</a></li>
        <li className='listaHeader'><a className='linkLista'>Products</a></li>
        <li className='listaHeader'><a className='linkLista'>Contcto</a></li>
        <li className='listaHeader'><a className='linkLista'>Sucursales</a></li>
      </ul>

      </div>
  )
}

export default Header