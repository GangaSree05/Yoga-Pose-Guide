import { useState } from "react";
import "../Styles/Easy.css";

const poses = [
  {
    id: 1,
    name: "Adho Mukha Shvanasan",
    description: "Downward Dog Pose, Downward-facing Dog Pose, or Adho Mukha Shvanasana is an inversion Asana in modern yoga as exercise, often practised as part of a flowing sequence of poses, especially Surya Namaskar, the Salute to the Sun. The asana does not have formally named variations, but several playful variants are used to assist beginning practitioners to become comfortable in the pose. Downward Dog stretches the hamstring and calf muscles in the backs of the legs, and builds strength in the shoulders. Some popular sites have advised against it during pregnancy, but an experimental study of pregnant women found it beneficial. Downward Dog has been called “deservedly one of yoga’s most widely recognized yoga poses” and the “quintessential yoga pose”. As such it is often the asana of choice when yoga is depicted in film, literature, and advertising. The pose has frequently appeared in Western culture, including in the titles of novels, a painting, and a television series, and it is implied in the name, “Yoga”, of a foldable computer.",
    image: "/images/pose1.jpg",
  },
  {
    id: 2,
    name: "Dandasana",
    description: "A handstand is the act of supporting the body in a stable, inverted vertical position by balancing on the hands. In a basic handstand, the body is held straight with arms and legs fully extended, with hands spaced approximately shoulder-width apart and the legs together. There are many variations of handstands, all of which require the performer to possess adequate balance and upper body strength.Handstands are performed in many athletic activities, including acro dance, cheerleading, circus, yoga, calisthenics, and gymnastics. Some variation of a handstand is performed on every gymnastic apparatus, and many tumbling skills pass through a handstand position during their execution. Breakdancers incorporate handstands in freezes and kicks. Armstand dives—a category found in competitive platform diving—are dives that begin with a handstand. Swimmers perform underwater handstands as a game, with their heads, arms, and bodies underwater with their legs and feet extended above the surface, often having contests with the winner being the person who can remain in an underwater handstand the longest.",
    image: "/images/pose2.jpg",
  },
  {
    id: 3,
    name: "Akarna Dhanurasana",
    description: "Akarna Dhanurasana also called the Archer pose, Bow and Arrow pose, or Shooting Bow pose is an asana in hatha yoga and modern yoga as exercise. The posture resembles an archer about to release an arrow.",
    image: "/images/pose3.jpg",
  },
  {
    id: 4,
    name: "Anantasana",
    description: "Anantasana Sleeping Vishnu Pose or Vishnu’s Couch Pose, Eternal One’s Pose, or Side-Reclining Leg Lift is an asana in modern yoga as exercise.",
    image: "/images/pose4.jpg",
  },
  {
    id: 5,
    name: "Anjaneyasana",
    description: "Anjaneyasana Crescent Moon Pose or Ashwa Sanchalanasana, Equestrian Pose is a lunging back bending asana in modern yoga as exercise. It is sometimes included as one of the asanas in the Surya Namaskar sequence, though usually with arms down in that case.",
    image: "/images/pose5.jpg",
  },
  
    
];

const Easy = () => {
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

export default Easy;
