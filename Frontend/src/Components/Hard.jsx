import { useState } from "react";
import "../styles/easy.css";

const poses = [
  {
    id: 1,
    name: "Balasana",
    description: "Balasana, Child’s Pose, or Child’s Resting Pose is a kneeling asana in modern yoga as exercise. Balasana is a counter asana for various asanas and is usually practiced before and after Sirsasana.",
    image: "/images/pose11.jpg",
  },
  {
    id: 2,
    name: "Bhekasana",
    description: "Bhekasana or Frog posture is a reclining asana in modern yoga as exercise. It is one of several poses that put the body in a shape like that of a frog: another is Mandukasana. The name comes from the Sanskrit words Bheka (भेका, bheka) meaning “frog”, and asana (आसन) meaning “posture” since the asana resembles a frog.",
    image: "/images/pose12.jpg",
  },
  {
    id: 3,
    name: "Bhujangasana",
    description: "Bhujangasana or Cobra Pose is a reclining back-bending asana in hatha yoga and modern yoga as exercise. It is commonly performed in a cycle of asanas in Surya Namaskar (Salute to the Sun) as an alternative to Urdhva Mukha Svanasana (Upwards Dog Pose).",
    image: "/images/pose13.jpg",
  },
  {
    id: 4,
    name: "Bhairavasana",
    description: "Bhairavasana or formidable pose, sometimes called Supta Bhairavasana is a reclining asana in hatha yoga; the variation Kala Bhairavasana has the body balanced on the straight leg and one arm, as in Vasiṣṭhasana. Bhairava is one of the eight aspects of the god Shiva. The pose has also been called Aṇkusasana, the elephant goad pose.",
    image: "/images/pose14.jpg",
  },
  {
    id: 5,
    name: "Bharadvajasana",
    description: "Bharadvajasana or Bharadvaja’s twist is a twisting asana in modern yoga as exercise. The asana is dedicated to the sage Bharadvāja who was one of the Seven Great Sages or Rishi. He was the father of Drona, a master of military arts and the royal guru to Kauravas, Pandavas and the Devastras, the princes who fought the great war of the Mahabharata.",
    image: "/images/pose15.jpg",
  },
  
    
];

const Hard = () => {
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

export default Hard;
