import { useState } from "react";
import "../Styles/Easy.css";

const poses = [
  {
    id: 1,
    name: "Ashtanga Namaskara",
    description: "Ashtanga Namaskara also called Ashtanga Dandavat Pranam, Eight Limbed pose, Caterpillar pose, or Chest, Knees and Chin pose is a posture sometimes used in the Surya Namaskar sequence in modern yoga as exercise, where the body is balanced on eight points of contact with the floor: feet, knees, chest, chin and hands..",
    image: "/images/pose6.jpg",
  },
  {
    id: 2,
    name: "Bakasana",
    description: "Bakasana (Crane pose), and the similar Kakasana (Crow pose) are balancing asanas in hatha yoga and modern yoga as exercise. In all variations, these are arm balancing poses in which hands are planted on the floor, shins rest upon upper arms, and feet lift up. The poses are often confused, but traditionally Kakasana has arms bent, Bakasana (the crane being the taller bird with longer legs) has the arms straight.",
    image: "/images/pose7.jpg",
  },
  {
    id: 3,
    name: "Astavakrasanaa",
    description: "Akarna Dhanurasana also called the Archer pose, Bow and Arrow pose, or Shooting Bow pose is an asana in hatha yoga and modern yoga as exercise. The posture resembles an archer about to release an arrow.",
    image: "/images/pose8.jpg",
  },
  {
    id: 4,
    name: "Astavakrasana",
    description: "Astavakrasana or Eight-Angle Pose is a hand-balancing asana in modern yoga as exercise dedicated to the sage Astavakra, the spiritual guru of King Janaka.",
    image: "/images/pose9.jpg",
  },
  {
    id: 5,
    name: "Baddha Konasana",
    description: "Baddha Konasana, Bound Angle Pose, Throne Pose, Butterfly Pose, or Cobbler’s Pose (after the typical sitting position of Indian cobblers when they work), and historically called Bhadrasana, is a seated asana in hatha yoga and modern yoga as exercise. It is suitable as a meditation seat.",
    image: "/images/pose10.jpg",
  },
  
    
];

const Medium = () => {
  const [completedPoses, setCompletedPoses] = useState([]);

  const handleComplete = (id) => {
    setCompletedPoses((prev) =>
      prev.includes(id) ? prev.filter((poseId) => poseId !== id) : [...prev, id]
    );
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
              className={`complete-button ${
                completedPoses.includes(pose.id) ? "completed" : ""
              }`}
              onClick={() => handleComplete(pose.id)}
            >
              {completedPoses.includes(pose.id) ? "Completed" : "Complete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medium;
