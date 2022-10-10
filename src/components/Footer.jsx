import React from 'react'

export const Footer = () => {
  return (
    <footer id="footer-main">
      <div id="footer-container">
        <div className="categories">
          <h3>Categorías</h3>
          <ul className="list">
            <li>Nuevos</li>
            <li>Segunda mano</li>
            <li>Km 0</li>
          </ul>
        </div>
        <div className="someText">
          <h3>Algo más</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            dolorum sed consectetur dolor eos debitis illo ducimus quae quo
          </p>
        </div>
      </div>
      <div className="copyright">2022 &copy; Todos los derechos reservados</div>
    </footer>
  )
}
