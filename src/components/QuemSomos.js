import React from 'react'
import "../css/quemSomos.css"

import imgQuemSomos from "../img/imgQuemSomos.png";

const QuemSomos = () => {
  return (
    <div className='quemSomos'>

              <div className="texto">

              <h1 className="tituloPrincipal">Quem Somo</h1>

              <p className="quemSomoParagrafo">

              </p>
              Lorem Ipsum es simplemente el texto de relleno
              de las imprentas y archivos de texto. Lorem
              Ipsum ha sido el texto de relleno estándar de las
               industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta)
                desconocido usó una galería de textos y los
                 mezcló de tal manera que logró hacer un libro
                  de textos especimen. No sólo sobrevivió 500 años,
                  sino que tambien ingresó como texto de relleno
                  en documentos electrónicos, quedando
                  esencialmente igual al original. Fue popularizado
                  en los 60s con la creación de las hojas "Letraset",
                  las cuales contenian pasajes de Lorem Ipsum, y
                   más recientemente con software de autoedición,
                    como por ejemplo Aldus PageMaker, el cual
                     incluye versiones de Lorem Ipsum.
              </div>

              <div className="imagem">
        <img src={imgQuemSomos} alt="" />
              </div>

    </div>
  )
}

export default QuemSomos