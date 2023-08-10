import "./profile.css";
import Navbar from "../../components/navbar/navbar";
import { Fragment, useState } from "react";

function Profile() {

  const [profileVisibility, setProfileVisibility] = useState(false);

  return (
    <Fragment>
      <Navbar />
      <div className="profileCard">
        <div className="profilePictureContainer" onClick={()=>setProfileVisibility(!profileVisibility)}>
          <i className="fa-solid fa-user"></i>
        </div>
        <div className={profileVisibility ? "data visible" : "data"}>
          <h1 className="nickname">duckjourney</h1>
          <h2 className="emailProfile">leborandev@gmail.com</h2>
          <h3 className="id">#1313</h3>
          <button className="canjearPuntos">Canjear puntos</button>
        </div>
        <div className="progressBar">
          <progress
            className="progress"
            id="myProgressBar"
            value="654"
            max="1000"
          ></progress>
          <span>654/1000</span>
        </div>
      </div>
    </Fragment>
  );
}

export default Profile;
