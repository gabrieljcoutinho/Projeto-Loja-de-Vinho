import React from 'react'
import "../css/viniculas.css"

import imgVinicula from "../img/exemploVinicula.png"

const Viniculas = () => {
  return (
    <div className='viniculas'>

            <h4 className='subTituloVinicula'>AUGUE SED NEC</h4>
            <h3 className="tituloVinicula">VINEYARD EVENTS</h3>


            <div className="eventos">

            <div className="localidades">

                            <div className="localidadeConteudo">
1
                            </div>

                            <div className="localidadeConteudo">
2
                                </div>

                                <div className="localidadeConteudo">
3
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