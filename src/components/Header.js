import React from 'react'
import "../css/header.css"

import imgHeader from "../img/logoHeader.png"

const Header = () => {
  return (
    <div className='header'><img src={imgHeader} alt="" /></div>
  )
}

export default Header