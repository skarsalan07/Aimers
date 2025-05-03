import React from 'react';
import '../assets/css/roadmap.css';

const Timeline = () => {
  return (
    <section className="design-section">
      <div className="container">
        {/* Heading */}
        <h2 className="heading">Generate Learning Roadmap</h2>

        <div className="timeline">
          {/* This is the main container that contains the whole timeline. */}

          {/* Empty div used to fill space */}
          <div className="timeline-empty"></div>

          {/* Timeline middle section */}
          <div className="timeline-middle d-flex justify-content-center">
            <div className="timeline-circle"></div>
          </div>

          <div className="timeline-component timeline-content">
            <h3>HTML</h3>
            <p>Some Text</p>
          </div>

          <div className="timeline-component timeline-content">
            <h3>CSS</h3>
            <p>Some Text.</p>
          </div>

          <div className="timeline-middle d-flex justify-content-center">
            <div className="timeline-circle"></div>
          </div>

          <div className="timeline-empty"></div>

          <div className="timeline-empty"></div>

          <div className="timeline-middle d-flex justify-content-center">
            <div className="timeline-circle"></div>
          </div>

          <div className="timeline-component timeline-content">
            <h3>Javascript</h3>
            <p>Some Text.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
