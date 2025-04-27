import React from 'react';
import { Carousel, Button, Card, Col, Row } from 'react-bootstrap';
import '../assets/css/curosl.css'; // Ensure this CSS file is properly linked

const CoursePage = () => {
  return (
    <div>
      {/* Course Carousel */}
      <Carousel className="course-carousel" fade={false} interval={3000} controls={true}>
        {/* Carousel Items */}
        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src="https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg" alt="Data Science" />
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-title">Course 1: Data Science</h3>
            <p className="carousel-description">Master data analysis and data-driven decision making.</p>
            <Button className="carousel-button" variant="primary" href="/course-1">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src="https://media.istockphoto.com/id/2123170383/photo/hands-of-robot-and-human-touch-artificial-intelligence-of-global-networking-advancing.jpg?s=612x612&w=0&k=20&c=6d2hKy6aTC2iyVJ3_wHd_RAa_VA0YuooL8IKOw_7xgI=" alt="AI for Beginners" />
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-title">Course 2: AI for Beginners</h3>
            <p className="carousel-description">Learn the basics of AI and machine learning.</p>
            <Button className="carousel-button" variant="primary" href="/course-2">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 carousel-image" src="https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg" alt="Deep Learning" />
          <Carousel.Caption className="carousel-caption">
            <h3 className="carousel-title">Course 3: Deep Learning</h3>
            <p className="carousel-description">Dive into neural networks and deep learning models.</p>
            <Button className="carousel-button" variant="primary" href="/course-3">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Popular Courses Section */}
      <section className="popular-courses">
        <h2 className="section-title">Popular Courses</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg" />
              <Card.Body>
                <Card.Title>Data Science Mastery</Card.Title>
                <Card.Text>Learn to analyze and interpret complex data for business decisions.</Card.Text>
                <Button variant="primary" href="/course-1">Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://media.istockphoto.com/id/2123170383/photo/hands-of-robot-and-human-touch-artificial-intelligence-of-global-networking-advancing.jpg?s=612x612&w=0&k=20&c=6d2hKy6aTC2iyVJ3_wHd_RAa_VA0YuooL8IKOw_7xgI=" />
              <Card.Body>
                <Card.Title>AI for Beginners</Card.Title>
                <Card.Text>Start your AI journey with fundamentals and essential algorithms.</Card.Text>
                <Button variant="primary" href="/course-2">Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg" />
              <Card.Body>
                <Card.Title>Deep Learning Foundations</Card.Title>
                <Card.Text>Dive deep into neural networks, CNNs, RNNs, and more.</Card.Text>
                <Button variant="primary" href="/course-3">Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 className="section-title">Why Choose Us?</h2>
        <Row>
          <Col md={3} className="feature">
            <img src="https://via.placeholder.com/50" alt="Feature 1" />
            <h4>Expert Trainers</h4>
            <p>Learn from industry professionals with real-world experience.</p>
          </Col>
          <Col md={3} className="feature">
            <img src="https://via.placeholder.com/50" alt="Feature 2" />
            <h4>Industry-Relevant Courses</h4>
            <p>Courses designed to meet the demands of today's tech industry.</p>
          </Col>
          <Col md={3} className="feature">
            <img src="https://via.placeholder.com/50" alt="Feature 3" />
            <h4>Certification</h4>
            <p>Get certified to boost your career and showcase your skills.</p>
          </Col>
          <Col md={3} className="feature">
            <img src="https://via.placeholder.com/50" alt="Feature 4" />
            <h4>Lifetime Access</h4>
            <p>Access course materials for a lifetime to refresh your knowledge.</p>
          </Col>
        </Row>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">What Our Students Say</h2>
        <Row>
          <Col md={4}>
            <div className="testimonial">
              <p>"The Data Science course helped me land my first job as a Data Analyst!"</p>
              <h5>- John Doe</h5>
            </div>
          </Col>
          <Col md={4}>
            <div className="testimonial">
              <p>"AI for Beginners made AI concepts so easy to understand. Highly recommended!"</p>
              <h5>- Jane Smith</h5>
            </div>
          </Col>
          <Col md={4}>
            <div className="testimonial">
              <p>"The Deep Learning course took me from beginner to expert in neural networks."</p>
              <h5>- Emily Davis</h5>
            </div>
          </Col>
        </Row>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2 className="section-title">Explore Categories</h2>
        <Row>
          <Col md={3} className="category">
            <img src="https://via.placeholder.com/150" alt="Data Science" />
            <h4>Data Science</h4>
          </Col>
          <Col md={3} className="category">
            <img src="https://via.placeholder.com/150" alt="AI & ML" />
            <h4>AI & ML</h4>
          </Col>
          <Col md={3} className="category">
            <img src="https://via.placeholder.com/150" alt="Web Development" />
            <h4>Web Development</h4>
          </Col>
          <Col md={3} className="category">
            <img src="https://via.placeholder.com/150" alt="Cybersecurity" />
            <h4>Cybersecurity</h4>
          </Col>
        </Row>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2 className="section-title">Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest courses, updates, and exclusive offers!</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <Button variant="primary" type="submit">Subscribe</Button>
        </form>
      </section>
    </div>
  );
};

export default CoursePage;
