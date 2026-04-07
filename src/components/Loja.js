import React from 'react'
import "../css/loja.css"

import imgVinho1 from "../img/vinho/vinhoBarroco.png"
import imgVinho2 from "../img/vinho/vinhoParadigma.png"
import imgVinho3 from "../img/vinho/vinhoQuieto.png"
import imgVinho4 from "../img/vinho/vinhoParadigma2.png"
import imgVinho5 from "../img/vinho/vinhoBarrocoRose.png"
import imgVinho6 from "../img/vinho/vinhoAmalaya.png"



const Loja = () => {
  return (
    <div className='destques'>

                <h5 className='tituloDestaque'><span className='spanDestaque'>DESTA</span>QUES</h5>


<div class="flexbox">

<div class="div1">
     <img src={imgVinho1} alt="" className='imgVinhos' />

            <p className="NomeVinho">Barroco</p>

            <p className="precoVinho">$ 83.920</p>

            <ul className="descricaoVinho">
                <li >Malbec 1987</li>

                <li>Bodega | Mendoza</li>

                <li>Cosecha tardia</li>
    </ul>

</div>

<div class="div1">
<img src={imgVinho2} alt="" className='imgVinhos' />

<p className="NomeVinho">Paradigma</p>

<p className="precoVinho">$ 23.000</p>


            <ul className="descricaoVinho">
                <li>Malbec 1987</li>

                <li>Bodega | Mendoza</li>

                <li>Cosecha tardia</li>
    </ul>

</div>

<div class="div1">
<img src={imgVinho3} alt="" className='imgVinhos' />

<p className="NomeVinho">Quieto</p>

<p className="precoVinho"> $ 23.000</p>


            <ul className="descricaoVinho">
                <li>Malbec 1987</li>

                <li>Bodega | Mendoza</li>

                <li className='itemListaDestaques'>Cosecha tardia</li>
    </ul>

</div>


</div>

<br /><br /><br /><br /><br /><br /><br /><br />


<div class="flexbox">

    <div class="div1">
    <img src={imgVinho4} alt="" className='imgVinhos' />

    <p className="NomeVinho">Paradigma</p>

    <p className="precoVinho"> $ 10.5000</p>

    <ul className="descricaoVinho">
                <li className='itemListaDestaques'>Malbec 1987</li>

                <li className='itemListaDestaques'>Bodega | Mendoza</li>

                <li className='itemListaDestaques'>Cosecha tardia</li>
    </ul>

    </div>

    <div class="div1">
    <img src={imgVinho5} alt="" className='imgVinhos' />

    <p className="NomeVinho">Barroco Rose</p>

    <p className="precoVinho"> $ 23.420</p>

    <ul className="descricaoVinho">
                <li className='itemListaDestaques'>Malbec 1987</li>

                <li className='itemListaDestaques'>Bodega | Mendoza</li>

                <li className='itemListaDestaques'>Cosecha tardia</li>
    </ul>

    </div>

    <div class="div1">
    <img src={imgVinho6} alt="" className='imgVinhos' />

    <p className="NomeVinho">Amalaya</p>

    <p className="precoVinho"> $ 9.000</p>

    <ul className="descricaoVinho">
                <li className='itemListaDestaques'>Malbec 1987</li>

                <li className='itemListaDestaques'>Bodega | Mendoza</li>

                <li className='itemListaDestaques'>Cosecha tardia</li>
    </ul>

    </div>



</div>
    </div>
  )
}

export default Loja