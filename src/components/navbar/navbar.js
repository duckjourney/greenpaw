import React, { useState } from "react";
import "./navbar.css";
import logo from "../../resources/logoPaws.png";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileBarOpen, setProfileBarOpen] = useState(false);

  return (
    <Fragment>
      {/* NAVBAR */}
      <nav>
        <i
          className="fa-solid fa-bars"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        ></i>
        <Link to={"/"}>
          <img className="logo" src={logo} alt="Green Paw logo" />
        </Link>
        <div>
          <i className="fa-solid fa-user" onClick={()=> setProfileBarOpen(!isProfileBarOpen)}></i>
        </div>
      </nav>
      {/* SIDEBAR */}
      <div className={isSidebarOpen ? "sidebar show" : "sidebar"}>
        <ul id="sidebar">
          <li className="sidebarElement">
            <i className="fa-solid fa-right-to-bracket"></i>
            <Link to={"/login"} className="login">
              Acceso
            </Link>
          </li>
          <li className="sidebarElement">
            <i className="fa-solid fa-address-card"></i>
            <Link to={"/register"} className="register">
              Registro
            </Link>
          </li>
          <li className="sidebarElement">
            <i className="fa-solid fa-map"></i>
            <Link to={"/map"} className="map">
              Mapa
            </Link>
          </li>
          <li className="sidebarElement">
            <i className="fa-solid fa-circle-question"></i>
            <Link to={"/faq"} className="faq">
              FAQ
            </Link>
          </li>
          <li className="sidebarElement">
            <i className="fa-solid fa-envelope"></i>
            <Link to={"/contact"} className="contact">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      {/* PROFILE OPTIONS */}
      <ul className={isProfileBarOpen ? "logBar show" : "logBar"}>
        <li className="logElement">
          <Link to={"/profile"} className="viewProfile">Mi perfil</Link>
        </li>
        <li className="logElement logOut" >Cerrar sesión</li>
      </ul>
    </Fragment>
  );
}

export default Navbar;
