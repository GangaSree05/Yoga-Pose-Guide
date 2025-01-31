import { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Easy.css";

const poses = [
  { id: 6, name: "Adho Mukha Shvanasan", description: "Ardha Chandrasana or Half Moon Pose is a standing asana in modern yoga as exercise. The name comes from the Sanskrit words अर्ध ardha meaning “half”, चन्द्र candra meaning “moon”, and आसन asana meaning “posture” or “seat”.", image: "/images/pose1.jpg" },
  { id: 7, name: "Dandasana", description: "Ashtanga Namaskara also called Ashtanga Dandavat Pranam, Eight Limbed pose, Caterpillar pose, or Chest, Knees and Chin pose is a posture sometimes used in the Surya Namaskar sequence in modern yoga as exercise, where the body is balanced on eight points of contact with the floor: feet, knees, chest, chin and hands.", image: "/images/pose2.jpg" },
  
];

const Easy = () => {
  const [completedPoses, setCompletedPoses] = useState([]);
  const userEmail = localStorage.getItem("userEmail");
  console.log(userEmail) // Get stored email

  // 🔹 Fetch completed poses from the database on page load
  useEffect(() => {
    const fetchProgress = async () => {
      if (!userEmail) {
        console.error("⚠️ No user email found. Please log in.");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3001/save-progress?email=${userEmail}`);
        setCompletedPoses(response.data.completedPoses || []);
      } catch (error) {
        console.error("❌ Error fetching progress:", error.response?.data || error.message);
      }
    };

    fetchProgress();
  }, [userEmail]);

  // 🔹 Mark a pose as completed
  const handleComplete = (id) => {
    setCompletedPoses((prev) => (prev.includes(id) ? prev.filter((poseId) => poseId !== id) : [...prev, id]));
  };

  // 🔹 Save progress to the database
  const handleSaveProgress = async () => {
    if (!userEmail) {
      console.error("⚠️ User email not found.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/save-progress", {
        email: userEmail,
        completedPoses: completedPoses,
      });

      console.log("✅ Progress saved:", response.data);
      alert("Progress saved successfully!");
    } catch (error) {
      console.error("❌ Error saving progress:", error.response?.data || error.message);
    }
  };

  return (
    <div className="easy-container">
      <h1>Easy Yoga Poses</h1>
      <p>Start with these beginner-friendly yoga poses.</p>
      <div className="pose-list">
        {poses.map((pose) => (
          <div key={pose.id} className="pose-card">
            <img src={pose.image} alt={pose.name} className="pose-image" />
            <h2>{pose.name}</h2>
            <p>{pose.description}</p>
            <button
              className={`complete-button ${completedPoses.includes(pose.id) ? "completed" : ""}`}
              onClick={() => handleComplete(pose.id)}
            >
              {completedPoses.includes(pose.id) ? "Completed" : "Complete"}
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleSaveProgress}>Save Progress</button>
    </div>
  );
};

export default Easy;
