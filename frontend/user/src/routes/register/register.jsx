import { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar si las contraseñas coinciden
    if (formData.password !== formData.confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    // Enviar la información al servidor
    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickname: formData.nickname,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Te has registrado con éxito!", {
          onClose: () => navigate("/login"),
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Vaya parece que algo ha salido mal.", error);
    }
  };

  return (
    <div className="registerContainer">
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
        <h1 className="intro">Registrate ahora y empieza a ganar puntos!</h1>
        <h2 className="registerIntro">Introduce tus datos</h2>
        <div className="registerElements">
          <div className="form-element name">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="nickname"
              className="form-control"
              value={formData.nickname}
              onChange={(e) =>
                setFormData({ ...formData, nickname: e.target.value })
              }
              autoFocus
              required
            />
          </div>
          <div className="form-element email">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="form-element password">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>
          <div className="form-element confirmPassword">
            <label htmlFor="confirmPassword">Confirma tu contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
          </div>
        </div>
        <button type="submit" className="registerButton">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Register;
