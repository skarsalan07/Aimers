import React from 'react';
import '../assets/css/whyChooseUs.css'; // Ensure this CSS file is properly linked


const WhyChooseUs = () => {
  return (
    <div className="section">
      <h2 className="heading">Why Choose Aimers?</h2>
      <p className="subheading">Here's why Aimers stands out in interview preparation:</p>
      <div className="cards-container">
        <div className="card">
          <div className="icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <h3>AI-Powered Feedback</h3>
          <p>
            Get personalized feedback on your strengths and areas for improvement through AI analysis.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fas fa-chalkboard-teacher"></i>
          </div>
          <h3>Customizable Roadmaps</h3>
          <p>
            Our AI creates personalized learning roadmaps based on your skillset and interview needs.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fas fa-bullseye"></i>
          </div>
          <h3>Targeted Practice</h3>
          <p>
            Prepare with targeted mock interviews and exercises tailored to your weaknesses and goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
