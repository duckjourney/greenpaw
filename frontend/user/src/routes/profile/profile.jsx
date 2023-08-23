import React, { useState, useEffect } from "react";
import { useUser } from "../login/userContext";
import "./profile.css";
import QRCode from "qrcode.react";

function Profile() {
  const { user } = useUser();
  const [userData, setUserData] = useState(null);
  const [profileVisibility, setProfileVisibility] = useState(false);
  const [showQRPopup, setShowQRPopup] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/${user.idUsuario}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error recuperando los datos del usuario:", error));
  }, [user.idUsuario]);

  if (!userData) return <div>Cargando...</div>;

  const handleRedeemClick = () => {
    setShowQRPopup(true);
  };

  return (
    <div className="profileCard">
      <div
        className="profilePictureContainer"
        onClick={() => setProfileVisibility(!profileVisibility)}
      >
        <i className="fa-solid fa-user"></i>
      </div>
      <div className={profileVisibility ? "data visible" : "data"}>
        <h1 className="nickname">{userData.nickname}</h1>
        <h2 className="emailProfile">{userData.email}</h2>
        <h3 className="id">#{userData.idUsuario}</h3>
        <button className="canjearPuntos" onClick={handleRedeemClick}>
          Canjear puntos
        </button>
      </div>
      <div className="progressBar">
        <progress
          className="progress"
          id="myProgressBar"
          value={userData.cantidadPuntos}
          max="1000"
        ></progress>
        <span>{userData.cantidadPuntos}/1000</span>
      </div>
      {showQRPopup && (
        <div className="qrPopup">
          <div className="popupContent">
            <button onClick={() => setShowQRPopup(false)}>Cerrar</button>
            <QRCode
              value={`Usuario: ${userData.nickname}, Correo: ${userData.email}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
