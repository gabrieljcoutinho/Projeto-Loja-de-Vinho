import React from 'react'
import "../css/viniculas.css"

import imgVinicula from "../img/exemploVinicula.png"
import wineTour from "../img/wineTour.png"
import aperitivo from "../img/aperitivo.png"
import coletaUva from "../img/coletaUva.png"

const eventos = [
  {
    img: wineTour,
    titulo: "WINE TOUR",
    data: "12 Maio 2026",
    info: "10:00 AM - Napa Valley"
  },
  {
    img: aperitivo,
    titulo: "APERITIV",
    data: "18 Maio 2026",
    info: "18:00 PM - Toscana"
  },
  {
    img: coletaUva,
    titulo: "DRINK´S ORIGIN",
    data: "25 Maio 2026",
    info: "08:00 AM - Mendoza"
  }
]

const Viniculas = () => {
  return (
    <div className='viniculas'>

      <h4 className='subTituloVinicula'>AUGUE SED NEC</h4>
      <h3 className="tituloVinicula">VINEYARD EVENTS</h3>

      <div className="eventos">

        <div className="localidades">
          {eventos.map((evento, index) => (
            <div className="localidadeConteudo" key={index}>
              <img src={evento.img} alt={evento.titulo} />

              <div className="conteudoEscrito">
                <h4>{evento.titulo}</h4>
                <p>{evento.data}</p>
                <p>{evento.info}</p>

                <button>See More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="imgVinicula">
          <img src={imgVinicula} alt="Vinicula" />
        </div>

      </div>

    </div>
  )
}

export default Viniculas