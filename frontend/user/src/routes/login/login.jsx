import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useUser } from "./userContext.jsx";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUser();
  const navigate = useNavigate();

  function handleLoginSuccess(userData) {
    setUser(userData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), 
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Bienvenid@ de nuevo!", {
          onClose: () => navigate("/profile"),
        });
        console.log(data);
        handleLoginSuccess(data.user);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Vaya, parece que algo ha fallado.");
    }
  };

  return (
    <div className="loginContainer">
      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit}>
        <h1 className="intro">Bienvenido de nuevo!</h1>
        <div className="loginElements">
          <div className="form-element email">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              className="form-control"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-element email">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
