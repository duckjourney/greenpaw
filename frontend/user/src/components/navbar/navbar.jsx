import { useState } from "react";
import "./navbar.css";
import logo from "../../resources/logo.png";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useUser } from "../../routes/login/userContext.jsx";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, logout } = useUser();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileBarOpen, setProfileBarOpen] = useState(false);
  const navigate = useNavigate();

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
        
        <div className="navLinks">
          <Link to={"/login"} className="navElement login">
            <i className="fa-solid fa-right-to-bracket"></i>
            <li onClick={() => setSidebarOpen(false)}>Acceso</li>
          </Link>
          <Link to={"/register"} className="navElement register">
            <i className="fa-solid fa-address-card"></i>
            <li onClick={() => setSidebarOpen(false)}>Registro</li>
          </Link>
          <Link to={"/map"} className="navElement map">
            <i className="fa-solid fa-map"></i>
            <li className="" onClick={() => setSidebarOpen(false)}>
              Mapa
            </li>
          </Link>
          <div
            className="navElement profile"
            onClick={() => setProfileBarOpen(!isProfileBarOpen)}
          >
            <i className="fa-solid fa-user"></i>
            <li>Perfil</li>
          </div>
        </div>
      </nav>
      {/* SIDEBAR */}
      <div className={isSidebarOpen ? "sidebar show" : "sidebar"}>
        <ul id="sidebar">
          <Link
            to={"/login"}
            className="sidebarElement login"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="fa-solid fa-right-to-bracket"></i>
            <li>Acceso</li>
          </Link>
          <Link
            to={"/register"}
            className="sidebarElement register"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="fa-solid fa-address-card"></i>
            <li>Registro</li>
          </Link>
          <Link
            to={"/map"}
            className="sidebarElement map"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="fa-solid fa-map"></i>
            <li>Mapa</li>
          </Link>
          <Link
            to={"/faq"}
            className="sidebarElement faq"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="fa-solid fa-circle-question"></i>
            <li>FAQ</li>
          </Link>
          <Link
            to={"/contact"}
            className="sidebarElement contact"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="fa-solid fa-envelope"></i>
            <li>Contacto</li>
          </Link>
        </ul>
      </div>
      {/* PROFILE OPTIONS */}
      <ul className={isProfileBarOpen ? "logBar show" : "logBar"}>
        {user && (
          <Link to={"/profile"} className="viewProfile">
            <li className="logElement" onClick={() => setProfileBarOpen(false)}>
              Mi perfil
            </li>
          </Link>
        )}

        <li
          className="logElement logOut"
          onClick={() => {
            setProfileBarOpen(false);
            logout();
            navigate("/");
          }}
        >
          Cerrar sesión
        </li>
      </ul>
    </Fragment>
  );
}

export default Navbar;
