import React from 'react'
import "../css/naturalAroma.css"

import img1 from "../img/naturalAroma/naturalAroma1.png"
import img2 from "../img/naturalAroma/naturalAroma2.png"
import img3 from "../img/naturalAroma/naturalAroma3.png"
import img4 from "../img/naturalAroma/naturalAroma4.png"
import img5 from "../img/naturalAroma/naturalAroma5.png"
import img6 from "../img/naturalAroma/naturalAroma6.png"

import imgSelo from "../img/naturalAroma/selo.png"

import imgSeloNatura1 from "../img/naturaAromaSelo/wineGlass.png"
import imgSeloNatura2 from "../img/naturaAromaSelo/fineSmell.png"
import imgSeloNatura3 from "../img/naturaAromaSelo/uniqueSort.png"
import imgSeloNatura4 from "../img/naturaAromaSelo/oldHabitat.png"

const NaturalAroma = () => {
  return (
    <div className='naturalAroma'>

      <h3 className='subtitulo'>AUGUE SED NEC</h3>
      <h2 className='titulo'>NATURAL AROMA</h2>

      <div className="flexboxNaturalAroma">
        <div className="itensNaturalAroma">
          <img src={img1} alt="Vinho 1" className='imgItemNaturalAroma' />
        </div>

        <div className="itensNaturalAroma">
          <img src={img2} alt="Vinho 2" className='imgItemNaturalAroma'/>
        </div>

        <div className="itensNaturalAroma">
          <img src={img3} alt="Vinho 3" className='imgItemNaturalAroma'/>
        </div>
      </div>

      <div className="flexboxNaturalAroma">
        <div className="itensNaturalAroma">
          <img src={img4} alt="Vinho 4" className='imgItemNaturalAroma'/>
        </div>

        <div className="itensNaturalAroma">
          <img src={img5} alt="Vinho 5" className='imgItemNaturalAroma'/>
        </div>

        <div className="itensNaturalAroma">
          <img src={img6} alt="Vinho 6" className='imgItemNaturalAroma'/>
        </div>
      </div>

      <div className="imgSeloMovimentacao">
        <img src={imgSelo} alt="Selo decorativo" />
      </div>

      <div className="naturaSelo">

        <div className="coluna">
          <div className="item">
            <img src={imgSeloNatura1} className="selos" alt="Wine Glass" />
            <div>
              <h5>Wine Glass</h5>
              <p>Lorem ipsum malesuada</p>
            </div>
          </div>

          <div className="item">
            <img src={imgSeloNatura2} className="selos" alt="Fine Smell" />
            <div>
              <h5>Fine Smell</h5>
              <p>Lorem ipsum malesuada</p>
            </div>
          </div>
        </div>

        <div className="coluna">
          <div className="item">
            <img src={imgSeloNatura3} className="selos" alt="Unique Sort" />
            <div>
              <h5>Unique Sort</h5>
              <p>Lorem ipsum malesuada</p>
            </div>
          </div>

          <div className="item">
            <img src={imgSeloNatura4} className="selos" alt="Old Habit" />
            <div>
              <h5>Old Habit</h5>
              <p>Lorem ipsum malesuada</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default NaturalAroma