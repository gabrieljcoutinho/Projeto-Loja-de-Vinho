import React from 'react'
import "../css/naturalAroma.css"

import img1 from "../img/naturalAroma/naturalAroma1.png"
import img2 from "../img/naturalAroma/naturalAroma2.png"
import img3 from "../img/naturalAroma/naturalAroma3.png"
import img4 from "../img/naturalAroma/naturalAroma4.png"
import img5 from "../img/naturalAroma/naturalAroma5.png"
import img6 from "../img/naturalAroma/naturalAroma6.png"

import imgSelo from "../img/naturalAroma/selo.png"

const NaturalAroma = () => {
  return (
    <div className='naturalAroma'>

                <h3 className='subtitulo'>AUGUE SED NEC</h3>

                <h2 className='titulo'>NATURAL AROMA</h2>




              <div className="flexboxGeral"></div>
              <div className="flexboxNaturalAroma">

<div className="itensNaturalAroma">
<img src={img1} alt="" className='imgItemNaturalAroma' />
</div>

<div className="itensNaturalAroma">
<img src={img2} alt="" className='imgItemNaturalAroma'/>
</div>

<div className="itensNaturalAroma">
<img src={img3} alt="" className='imgItemNaturalAroma'/>
</div>

</div>


<div className="flexboxNaturalAroma">

<div className="itensNaturalAroma">
<img src={img4} alt="" className='imgItemNaturalAroma'/>
  </div>

  <div className="itensNaturalAroma">
  <img src={img5} alt="" className='imgItemNaturalAroma'/>
</div>

<div className="itensNaturalAroma">
<img src={img6} alt="" className='imgItemNaturalAroma'/>
</div>

</div>


        <div className="imgSelo">
          <img src={imgSelo} alt="" />
        </div>

    </div>
  )
}

export default NaturalAroma