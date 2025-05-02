import React from 'react';
import { Carousel, Button} from 'react-bootstrap';
import '../assets/css/curosl.css'; // Ensure this CSS file is properly linked

const CoursePage = () => {
  return (
    <div>
      {/* Course Carousel */}
      <Carousel className="course-carousel" fade={false} interval={3000} controls={true}>
        {/* Carousel Items */}
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src="https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg" alt="AI Mock Interview" />
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-title">AI Mock Interview</h3>
            <p className="carousel-description">Mock Interviews, Real Results.</p>
            <Button className="carousel-button" variant="primary" href="/course-1">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src="https://media.istockphoto.com/id/2123170383/photo/hands-of-robot-and-human-touch-artificial-intelligence-of-global-networking-advancing.jpg?s=612x612&w=0&k=20&c=6d2hKy6aTC2iyVJ3_wHd_RAa_VA0YuooL8IKOw_7xgI=" alt="AI for Beginners" />
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-title">AI for Beginners</h3>
            <p className="carousel-description">Prepare Smart, Interview Better.</p>
            <Button className="carousel-button" variant="primary" href="/course-2">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src="https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg" alt="Deep Learning" />
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-title">Deep Learning</h3>
            <p className="carousel-description">Test, Learn, Grow.</p>
            <Button className="carousel-button" variant="primary" href="/course-3">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Additional Carousel Item for Roadmap Generator */}
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src="https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg" alt="Roadmap Generator" />
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-title">Roadmap Generator</h3>
            <p className="carousel-description">Your Path, Your Plan.</p>
            <Button className="carousel-button" variant="primary" href="/course-4">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CoursePage;
