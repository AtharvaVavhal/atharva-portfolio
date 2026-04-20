import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>FoodSafe</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a food safety awareness web app with API integration for
              real-time data. Implemented responsive UI and optimized API calls
              to improve performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>CampusCopy</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a digital printing platform for campus users with order
              flow and UI optimization. Focused on usability and smooth
              navigation for real-world use cases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Habit Tracker</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a productivity tracking app with state management and local
              persistence. Designed clean UI for daily habit monitoring and
              consistency tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
