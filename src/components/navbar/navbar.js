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
          <i
            className="fa-solid fa-user"
            onClick={() => setProfileBarOpen(!isProfileBarOpen)}
          ></i>
        </div>
      </nav>
      {/* SIDEBAR */}
      <div className={isSidebarOpen ? "sidebar show" : "sidebar"}>
        <ul id="sidebar">
          <Link to={"/login"} className="sidebarElement login">
            <i className="fa-solid fa-right-to-bracket"></i>
            <li onClick={() => setSidebarOpen(false)}>Acceso</li>
          </Link>
          <Link to={"/register"} className="sidebarElement register">
            <i className="fa-solid fa-address-card"></i>
            <li onClick={() => setSidebarOpen(false)}>Registro</li>
          </Link>
          <Link to={"/map"} className="sidebarElement map">
            <i className="fa-solid fa-map"></i>
            <li className="" onClick={() => setSidebarOpen(false)}>
              Mapa
            </li>
          </Link>
          <Link to={"/faq"} className="sidebarElement faq">
            <i className="fa-solid fa-circle-question"></i>
            <li className="" onClick={() => setSidebarOpen(false)}>
              FAQ
            </li>
          </Link>
          <Link to={"/contact"} className="sidebarElement contact">
            <i className="fa-solid fa-envelope"></i>
            <li className="" onClick={() => setSidebarOpen(false)}>
              Contacto
            </li>
          </Link>
        </ul>
      </div>
      {/* PROFILE OPTIONS */}
      <ul className={isProfileBarOpen ? "logBar show" : "logBar"}>
        <Link to={"/profile"} className="viewProfile">
          <li className="logElement" onClick={() => setProfileBarOpen(false)}>
            Mi perfil
          </li>
        </Link>
        <li
          className="logElement logOut"
          onClick={() => setProfileBarOpen(false)}
        >
          Cerrar sesión
        </li>
      </ul>
    </Fragment>
  );
}

export default Navbar;
