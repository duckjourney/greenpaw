import React, { useState, useEffect } from "react";
import "./leaderboard.css";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data when component mounts
    fetch("http://localhost:8080/leaderboard")
      .then((response) => response.json())
      .then((data) => setLeaderboardData(data))
      .catch((error) =>
        console.error("Error fetching leaderboard data:", error)
      );
  }, []);

  return (
    <div className="leaderboardContainer">
      <i className="fa-solid fa-ranking-star"></i>
      <div className="bars">
        {leaderboardData.map((user) => (
          <div className="leaderboardUserData" key={user.idUsuario}>
            <div className="usr">
              <div className="leaderboardPicture">
                <p>{user.nickname}</p>
              </div>
            </div>
            <div className="leaderboardProgressBar">
              <progress
                className="leaderboardProgress"
                id="progressBar"
                value={user.cantidadPuntos}
                max="1000"
              ></progress>
            </div>
            <span>{user.cantidadPuntos}/1000</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
