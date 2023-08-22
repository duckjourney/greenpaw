import { useState } from "react";
import axios from "axios";
import "./profile.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const [id, setId] = useState(''); 

  const handleRewardClick = async () => {
    if (!id) {
      console.error("Please enter a valid ID!");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8080/reward/${id}`);
      if (response.data.success) {
        toast.success("Puntos entregados correctamente!");
      } else {
        toast.error("Parece que el usuario indicado no existe.");
      }
    } catch (error) {
      console.error("Error rewarding user", error);
    }
  };

  return (
    <div className="profileCard">
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
      <div className="profilePictureContainer">
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="data visible">
        <h1 className="nickname">Comercio</h1>
        <h2 className="emailProfile">comercio@comercio.com</h2>
      </div>
      <div className="points">
        <input 
          type="number" 
          value={id} 
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleRewardClick}>Recompensar</button>
      </div>
    </div>
  );
}

export default Profile;
