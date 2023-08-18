import "./register.css";

function Register() {
  return (
    <div className="registerContainer">
      <form method="post">
        <h1 className="intro">Registrate ahora y empieza a ganar puntos!</h1>
        <h2 className="registerIntro">Introduce tus datos</h2>
        <div className="registerElements">
          <div className="form-element name">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" className="form-control" autoFocus required />
          </div>
          <div className="form-element email">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" className="form-control" required />
          </div>
          <div className="form-element password">
            <label htmlFor="email">Contraseña</label>
            <input
              type="password"
              id="password"
              className="form-control"
              required
            />
          </div>
          <div className="form-element confirmPassword">
            <label htmlFor="email">Confirma tu contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              required
            />
          </div>
        </div>
        <button type="submit" className="registerButton">Enviar</button>
      </form>
    </div>
  );
}

export default Register;