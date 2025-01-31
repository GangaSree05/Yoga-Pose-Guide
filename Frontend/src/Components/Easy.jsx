import { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Easy.css";

const poses = [
  { id: 1, name: "Adho Mukha Shvanasan", description: "Downward Dog Pose, Downward-facing Dog Pose, or Adho Mukha Shvanasana is an inversion Asana in modern yoga as exercise, often practised as part of a flowing sequence of poses, especially Surya Namaskar, the Salute to the Sun. The asana does not have formally named variations, but several playful variants are used to assist beginning practitioners to become comfortable in the pose.", image: "/images/pose1.jpg" },
  { id: 2, name: "Dandasana", description: "Half Moon Pose is a standing asana in modern yoga as exercise.", image: "/images/pose2.jpg" },
  { id: 3, name: "Akarna Dhanurasana", description: "Akarna Dhanurasana also called the Archer pose, Bow and Arrow pose, or Shooting Bow pose is an asana in hatha yoga and modern yoga as exercise. The posture resembles an archer about to release an arrow.", image: "/images/pose3.jpg" },
  { id: 4, name: "Anantasana", description: "Anantasana Sleeping Vishnu Pose or Vishnu’s Couch Pose, Eternal One’s Pose, or Side-Reclining Leg Lift is an asana in modern yoga as exercise.", image: "/images/pose4.jpg" },
  { id: 5, name: "Anjaneyasana", description: "Anjaneyasana Crescent Moon Pose or Ashwa Sanchalanasana, Equestrian Pose is a lunging back bending asana in modern yoga as exercise. It is sometimes included as one of the asanas in the Surya Namaskar sequence, though usually with arms down in that case..", image: "/images/pose5.jpg" },
  
];

const Easy = () => {
  const [completedPoses, setCompletedPoses] = useState([]);
  const userEmail = localStorage.getItem("userEmail");
  console.log(userEmail) 

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

  const handleComplete = (id) => {
    setCompletedPoses((prev) => (prev.includes(id) ? prev.filter((poseId) => poseId !== id) : [...prev, id]));
  };

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
