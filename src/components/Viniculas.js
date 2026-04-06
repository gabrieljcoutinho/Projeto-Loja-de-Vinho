import React from 'react'
import "../css/viniculas.css"

import imgVinicula from "../img/exemploVinicula.png"
import wineTour from "../img/wineTour.png"
import aperitivo from "../img/aperitivo.png"
import coletaUva from "../img/coletaUva.png"

const Viniculas = () => {
  return (
    <div className='viniculas'>

            <h4 className='subTituloVinicula'>AUGUE SED NEC</h4>
            <h3 className="tituloVinicula">VINEYARD EVENTS</h3>


            <div className="eventos">

            <div className="localidades">

                            <div className="localidadeConteudo">
                                        <img src={wineTour} alt="" />
                            </div>

                            <div className="localidadeConteudo">
                                    <img src={aperitivo} alt="" />
                                </div>

                                <div className="localidadeConteudo">
                                        <img src={coletaUva} alt="" />
                                </div>

                </div>

                <div className="imgVinicula">
                            <img src={imgVinicula} alt="" />
                </div>

            </div>


    </div>
  )
}

export default Viniculas