import React from 'react'
import "../css/sucursale.css"

import imgVinicula1 from "../img/viniculas/vinicula1.png"
import imgVinicula2 from "../img/viniculas/vinicula2.png"
import imgVinicula3 from "../img/viniculas/vinicula3.png"

const Sucursale = () => {
  return (
    <div className='sucursale'>

      <h2 className='tituloSucursale'>
        <span className='spanSucursale'>Sucu</span>rsale
      </h2>

      <div className="viniculas">

        <div className="vinicula">
          <img src={imgVinicula1} alt="Vinícula 1"  className='imgVinicula'/>
        </div>

        <div className="vinicula">
          <img src={imgVinicula2} alt="Vinícula 2" />
        </div>

        <div className="vinicula">
          <img src={imgVinicula3} alt="Vinícula 3" />
        </div>

      </div>

    </div>
  )
}

export default Sucursale