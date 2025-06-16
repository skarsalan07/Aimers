import React, { useState } from "react";
import '../assets/css/recommendation.css';
import axios from 'axios';

const Grid = () => {
  const [input, setInput] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (input.trim() === "") return;

    setLoading(true);
    setRecommendations([]); // clear previous results
    setTimeout(() => {
      axios.get("http://localhost:8000/recommend", {
        params: { query: input }
      })
      .then(response => {
        setRecommendations(response.data.recommendations);
      })
      .catch(error => {
        console.error("Error fetching recommendations:", error);
      })
      .finally(() => {
        setLoading(false);
      });
    }, 1000); // show animation for 1 second
  };

  return (
    <div className="recommendation-container">
      <h2 className="heading">Tune Interviews for yourself</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your interests (e.g., NLP, ML, AI)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit} className="start-btn">Get Recommendations</button>
      </div>

      {/* Animation when loading */}
      {loading && (
        <div className="ai-loader">✨ AI is creating your path... ✨</div>
      )}

      {/* Grid after loading */}
      {!loading && recommendations.length > 0 && (
        <div className="container">
          <div className="row">
            {recommendations.map((topic, index) => (
              <div className="col-12 col-md-4 mb-4" key={index}>
                <div className={`grid__thing gradient-${index % 6}`}>
                  <div className="overlay1">
                    <p className="text">{topic}</p>
                    <button className="start-btn">Start Interview</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Grid;
