import React from 'react'
import "../css/quemSomos.css"

import imgQuemSomos from "../img/imgQuemSomos.png";

const QuemSomos = () => {
  return (
    <div className='quemSomos'>

              <div className="texto">
              <h1 className="tituloPrincipal">Quem Somo</h1>
              </div>

              <div className="imagem">
        <img src={imgQuemSomos} alt="" />
              </div>

    </div>
  )
}

export default QuemSomos