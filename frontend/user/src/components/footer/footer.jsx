import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <Link to={"/faq"} className="footerElement faq">
          <i className="fa-solid fa-circle-question"></i>
          <li>FAQ</li>
        </Link>
        <Link to={"/contact"} className="footerElement contact">
          <i className="fa-solid fa-envelope"></i>
          <li>Contacto</li>
        </Link>
      </div>
      <div className="newsletter">
        <label htmlFor="newsletter">Suscribete a nuestra newsletter!</label>
        <input name="newsletter" type="text" placeholder="Indícanos tu email"/>
        <i className="fa-solid fa-paper-plane"></i>
      </div>
      <div className="socialMedia">
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-tiktok"></i>
        <i className="fa-brands fa-youtube"></i>
      </div>
    </div>
  );
}

export default Footer;
