import React from "react";
import '../assets/css/recommendation.css'; // Ensure this CSS file is properly linked

const Grid = () => {
  return (
    <div className="recommendation-container">
      <h2 className="heading">Recommended Interviews for You</h2>
      <div className="container">
        <div className="row">
          {/* Grid items start here */}
          <div className="col-12 col-md-4 mb-4">
            <div className="grid__thing">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg" alt="Image A" />
              <div className="overlay">
                <p className="text">Welcome to the Interview</p>
                <button className="start-btn">Start Interview</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="grid__thing">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg" alt="Image B" />
              <div className="overlay">
                <p className="text">Welcome to the Interview</p>
                <button className="start-btn">Start Interview</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="grid__thing">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg" alt="Image C" />
              <div className="overlay">
                <p className="text">Welcome to the Interview</p>
                <button className="start-btn">Start Interview</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="grid__thing">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg" alt="Image D" />
              <div className="overlay">
                <p className="text">Welcome to the Interview</p>
                <button className="start-btn">Start Interview</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="grid__thing">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg" alt="Image E" />
              <div className="overlay">
                <p className="text">Welcome to the Interview</p>
                <button className="start-btn">Start Interview</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="grid__thing">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg" alt="Image F" />
              <div className="overlay">
                <p className="text">Welcome to the Interview</p>
                <button className="start-btn">Start Interview</button>
              </div>
            </div>
          </div>
          {/* Grid items end here */}
        </div>
      </div>
    </div>
  );
};

export default Grid;
