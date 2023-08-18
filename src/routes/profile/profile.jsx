import { useState } from 'react';
import { useUser } from "../login/userContext";
import "./profile.css";
import QRCode from 'qrcode.react';


function Profile() {
  const { user } = useUser();
  const [profileVisibility, setProfileVisibility] = useState(false);
  const [showQRPopup, setShowQRPopup] = useState(false);

  const handleRedeemClick = () => {
    setShowQRPopup(true);
  }

  return (
    <div className="profileCard">
      <div
        className="profilePictureContainer"
        onClick={() => setProfileVisibility(!profileVisibility)}
      >
        <i className="fa-solid fa-user"></i>
      </div>
      <div className={profileVisibility ? "data visible" : "data"}>
        <h1 className="nickname">{user.Nickname}</h1>
        <h2 className="emailProfile">{user.Email}</h2>
        <h3 className="id">#{user.ID_usuario}</h3>
        <button className="canjearPuntos" onClick={handleRedeemClick}>Canjear puntos</button>
      </div>
      <div className="progressBar">
        <progress
          className="progress"
          id="myProgressBar"
          value={user.Cantidad_Puntos}
          max="1000"
        ></progress>
        <span>{user.Cantidad_Puntos}/1000</span>
      </div>

      {/* QR PopUp */}
      {showQRPopup && (
        <div className="qrPopup">
          <div className="popupContent">
            <button onClick={() => setShowQRPopup(false)}>Cerrar</button>
            <QRCode value={`Usuario: ${user.Nickname}, Correo: ${user.Email}`} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
