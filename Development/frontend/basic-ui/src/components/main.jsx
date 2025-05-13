import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import '../assets/css/curosl.css';
import image1 from '../assets/images/1.webp';
import Roadmap from '../assets/images/roadmap.jpg';

const CoursePage = () => {
  return (
    <div>
      {/* Course Carousel */}
      <Carousel className="course-carousel" fade={false} interval={3000} controls={true}>
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={image1} alt="AI Mock Interview" />
          <Carousel.Caption className="carousel-caption">
            <div className="caption-overlay">
              <h3 className="carousel-title">AI Mock Interview</h3>
              <p className="carousel-description">Mock Interviews, Real Results.</p>
              <Button className="carousel-button" variant="primary" href="/course-1">Explore</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src={Roadmap} alt="AI for Beginners" />
          <Carousel.Caption className="carousel-caption">
            <div className="caption-overlay">
              <h3 className="carousel-title">Roadmaps</h3>
              <p className="carousel-description">The Road to Your Dream Starts Here.</p>
              <Button className="carousel-button" variant="primary" href="/course-2">Explore</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src="https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg" alt="Deep Learning" />
          <Carousel.Caption className="carousel-caption">
            <div className="caption-overlay">
              <h3 className="carousel-title">Deep Learning</h3>
              <p className="carousel-description">Test, Learn, Grow.</p>
              <Button className="carousel-button" variant="primary" href="/course-3">Explore</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src="https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg" alt="Roadmap Generator" />
          <Carousel.Caption className="carousel-caption">
            <div className="caption-overlay">
              <h3 className="carousel-title">Roadmap Generator</h3>
              <p className="carousel-description">Your Path, Your Plan.</p>
              <Button className="carousel-button" variant="primary" href="/course-4">Explore</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CoursePage;
