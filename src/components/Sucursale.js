import React from 'react'
import "../css/sucursale.css"

import imgVinicula1 from "../img/viniculas/vinicula1.png"
import imgVinicula2 from "../img/viniculas/vinicula2.png"
import imgVinicula3 from "../img/viniculas/vinicula3.png"

const Sucursale = () => {
  return (
    <div className='sucursale'>

            <h2 className='tituloSucursale'><span className='spanSucursale'>Sucu</span>rsale</h2>


                <div className="viniculas">

                        <div className="vinicula1">
                                <img src={imgVinicula1} alt="" />
                        </div>

                        <div className="vinicula2">
                        <img src={imgVinicula2} alt="" />
                            </div>

                            <div className="vinicula3">
                            <img src={imgVinicula3} alt="" />
                            </div>


                </div>


    </div>
  )
}

export default Sucursale