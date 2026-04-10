import React from 'react'
import "../css/sucursale.css"

import imgVinicula1 from "../img/viniculas/vinicula1.png"
import imgVinicula2 from "../img/viniculas/vinicula2.png"
import imgVinicula3 from "../img/viniculas/vinicula3.png"

const Sucursale = () => {
  return (
    <div className='sucursale'>

      <h2 className='sucursale-title'>
        <span>Sucu</span>rsale
      </h2>

      <div className="sucursale-container">

        <div className="sucursale-card">
          <img src={imgVinicula1} alt="Vinícola 1" />
        </div>

        <div className="sucursale-card">
          <img src={imgVinicula2} alt="Vinícola 2" />
        </div>

        <div className="sucursale-card">
          <img src={imgVinicula3} alt="Vinícola 3" />
        </div>

      </div>

    </div>
  )
}

export default Sucursale