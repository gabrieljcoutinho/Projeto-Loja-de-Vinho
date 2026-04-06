import React from 'react'
import "../css/nossaHistoria.css"

import imgNossaHistoria from "../img/imgNossaHistoria.png"

const NossaHistoria = () => {
  return (
    <div className='nossaHistoria'>

<div className="imgNossaHistoria">

<img src={imgNossaHistoria} alt="" className='imgNossaHistoriaDemostracao'/>
</div>

              <div className="conteudo">
              <h2 className='tituloNossaHistoria'>Our History</h2>
                <p className="textoNossaHistoria">
                Mattis aliquam malesuada euismod augue posuere venenatis. <br />
                 Maecenas faucibus dui vitae tellus et mi. Ut augue <br />
                  mattis augue dui et amet. Fringilla vestibulum dui, <br />
                   condimentum tristique duis. <br />

                Phasellus ut sem montes, aliquam morbi accumsan nam <br />
                aenean. Augue ut congue tincidunt eget commodo, <br />
                 tincidunt viverra.
                </p>
              </div>

    </div>
  )
}

export default NossaHistoria