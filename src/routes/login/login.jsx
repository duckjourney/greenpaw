import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="loginContainer">
      <form action="/my-handling-form-page" method="post">
        <h1 className="intro">Bienvenido de nuevo!</h1>
        <div className="loginElements">
          <div className="form-element email">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" className="form-control" required />
          </div>
          <div className="form-element email">
            <label htmlFor="email">Contraseña</label>
            <input
              type="password"
              id="password"
              className="form-control"
              required
            />
          </div>
          <p>
            ¿No tienes una cuenta?
            <Link to={"/register"} className="linkToRegister">
              Regístrate
            </Link>
          </p>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;
