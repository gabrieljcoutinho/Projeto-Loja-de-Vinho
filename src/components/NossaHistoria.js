import React from 'react'
import "../css/nossaHistoria.css"

import imgNossaHistoria from "../img/imgNossaHistoria.png"

const NossaHistoria = () => {
  return (
    <div className='nossaHistoria'>

              <div className="conteudo">
              <h2 className='tituloNossaHistoria'>Our History</h2>
              </div>

                <div className="imgNossaHistoria"></div>

            <img src={imgNossaHistoria} alt="" />

    </div>
  )
}

export default NossaHistoria