import { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Progress.css";

const Progress = () => {
  const [completedPoses, setCompletedPoses] = useState([]);
  const email = localStorage.getItem("userEmail"); // Replace with actual logged-in user's email

  useEffect(() => {
    axios
      .get(`http://localhost:3001/save-progress?email=${email}`)
      .then((response) => {
        setCompletedPoses(response.data.completedPoses || []);
      })
      .catch((error) => {
        console.error("Error fetching progress:", error);
      });
  }, []);

  return (
    <div className="progress-container">
      <h1>Your Progress</h1>
      {completedPoses.length === 0 ? (
        <p>No completed poses yet.</p>
      ) : (
        <ul>
          {completedPoses.map((poseId, index) => (
            <li key={index}>Yoga Pose ID: {poseId}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Progress;
