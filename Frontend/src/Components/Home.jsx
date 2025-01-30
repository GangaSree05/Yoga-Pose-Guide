import { Link } from "react-router-dom";
import "../Styles/Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div> 
      <div className="content">
        <h1 className="title">FlexiGuide</h1>
        <p className="description">
          Your personal guide to learning and tracking yoga poses. Explore a variety of yoga postures and improve your flexibility and mindfulness.
        </p>
        <Link to="/signup" className="explore-button">Explore</Link>
      </div>
    </div>
  );
};

export default Home;
