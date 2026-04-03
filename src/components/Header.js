import React from 'react'
import "../css/header.css"

import imgHeader from "../img/logoHeader.png"

const Header = () => {
  return (
    <div className='header'>
      <img src={imgHeader} alt="" />

      <ul className="listaHeader">
        <li className='listaHeader'><a href="#" className='linkLista'>Inicio</a></li>
      </ul>

      </div>
  )
}

export default Header