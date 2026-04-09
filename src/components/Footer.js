import React from 'react'
import "../css/footer.css"

const Footer = () => {
  return (
    <footer className='footer'>

      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-logo">
          <h2>Market <br /> Wine</h2>
        </div>

        {/* SUCURSALES */}
        <div className="footer-col">
          <h4>SUCURSALES</h4>
          <ul>
            <li>San Juan</li>
            <li>Corrientes</li>
            <li>Mendoza</li>
          </ul>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h4>LINKS</h4>
          <ul>
            <li>Productos</li>
            <li>Carrito</li>
            <li>WikWine</li>
          </ul>
        </div>

      </div>

    </footer>
  )
}

export default Footer