import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footerContainer row">
        <div className="col-lg-4 col-sm-12">
          <ul className="mt-5 mb-3">
            <li>
              <h4>SHOWROOM</h4>
            </li>
            <li>
              <h5>Dirección</h5>
            </li>
            <li>Calle 14 n°514</li>
            <li>La Plata, Buenos Aires</li>
            <li>
              <h5>Horarios de atención</h5>
            </li>
            <li>Lunes a Viernes | 10:00 a 13:00</li>
            <li>Lunes a Viernes | 14:00 a 19:00</li>
            <li>Sábados | 10:00 a 14:00</li>
            <li>Domingos | Cerrado</li>
          </ul>
        </div>
        <div className="col-lg-4 col-sm-12">
          <ul className="mt-5 mb-3">
            <li>
              <h4>CONTACTO</h4>
            </li>

            <li>Teléfono | (221) 5069074</li>
            <li>Email | </li>
            <li>contacto@domueblesamedida</li>
          </ul>
        </div>
        <div className="col-lg-4 col-sm-12">
          <ul className="mt-5 mb-3">
            <li>
              <h4>REDES SOCIALES</h4>
            </li>
            <li>
              <a href="https://www.instagram.com/d.o.muebles/" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                Facebook
              </a>
            </li>
          </ul>
          <ul>
              <li>Desarrollado por Mateo Fernández Banchi</li>
              <a target="_blank" href ="https://www.linkedin.com/in/mateofernandezbanchi/">Linkedin
              </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
