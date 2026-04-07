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

                <h5 className='tituloDestaque'><span>DESTA</span>QUES</h5>


<div class="flexbox">

<div class="div1">
     <img src={imgVinho1} alt="" />
</div>

<div class="div1">
<img src={imgVinho2} alt="" />
</div>

<div class="div1">
<img src={imgVinho3} alt="" />
</div>


</div>



<div class="flexbox">

    <div class="div1">
    <img src={imgVinho4} alt="" />
    </div>

    <div class="div1">
    </div>

    <div class="div1">
    </div>



</div>
    </div>
  )
}

export default Loja