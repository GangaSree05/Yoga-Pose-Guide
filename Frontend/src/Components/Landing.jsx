import { Link } from "react-router-dom";
import "../Styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <h2 className="logo">FlexiGuide</h2>
        <div className="nav-links">
          <Link to="/save-progress" className="nav-button">View Progress</Link>
          <Link to="/landing" className="nav-button">Start Learning</Link>
          <Link to="/" className="nav-button logout">Logout</Link>
        </div>
      </nav>

      <div className="content">
        <h1>FlexiGuide</h1>
        <p>Your personal yoga pose tracker and learning guide.</p>
        <div className="difficulty-buttons">
        <Link to="/easy" className="difficulty-button">Easy</Link>
        <Link to="/medium" className="difficulty-button">Medium</Link>
        <Link to="/hard" className="difficulty-button">Hard</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
