import React from 'react'
import "../css/quemSomos.css"

import imgQuemSomos from "../img/imgQuemSomos.png";

const QuemSomos = () => {
  return (
    <div className='quemSomos'>

            <div className="movimentacacaoConteudoGeral">
            <div className="texto">

<h1 className="tituloPrincipal">Quem Somos</h1>

<p className="quemSomoParagrafo">
Lorem Ipsum es simplemente el texto de relleno <br />
de las imprentas y archivos de texto. Lorem<br />
Ipsum ha sido el texto de relleno estándar de las<br />
 industrias desde el año 1500, cuando un impresor<br />
  (N. del T. persona que se dedica a la imprenta)<br />
  desconocido usó una galería de textos y los<br />
   mezcló de tal manera que logró hacer un libro <br />
    de textos especimen. No sólo sobrevivió 500 años, <br />
    sino que tambien ingresó como texto de relleno <br />
    en documentos electrónicos, quedando <br />
    esencialmente igual al original. Fue popularizado <br />
    en los 60s con la creación de las hojas "Letraset", <br />
    las cuales contenian pasajes de Lorem Ipsum, y <br />
     más recientemente con software de autoedición, <br />
      como por ejemplo Aldus PageMaker, el cual <br />
       incluye versiones de Lorem Ipsum.
</p>

</div>

<div className="imagem">
<img src={imgQuemSomos} alt=""  className='imgVinhoQuemSomos'/>
</div>

            </div>

    </div>
  )
}

export default QuemSomos