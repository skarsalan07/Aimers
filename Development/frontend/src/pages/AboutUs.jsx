import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

const AboutUs = () => {
  return (
    <>
      <Nav />
      <div className="about-page">
        <section className="hero">
          <h1 className="hero-title">Welcome to Aimers</h1>
          <p className="hero-subtitle">
            Your AI-powered interview partner. Built for students. Trusted by future professionals.
          </p>
        </section>

        <section className="section">
          <h2 className="heading">Who We Are</h2>
          <p className="text">
            Aimers is an AI-driven virtual interview platform created to empower computer science students, job seekers, and fresh graduates. We provide personalized interview simulations, instant feedback, tailored learning paths, and test preparation — all powered by intelligent algorithms.
          </p>
        </section>

        <section className="section">
          <h2 className="heading">What Makes Us Different</h2>
          <p className="text">
            Unlike generic platforms, Aimers uses advanced NLP and deep learning models to analyze your interview responses, identify weak areas, and recommend targeted resources. Our test analyzer also ensures that your strengths are highlighted in line with current industry expectations.
          </p>
          <div className="image-placeholder">[AI Analysis Illustration]</div>
        </section>

        <section className="section">          <h2 className="heading">Our Vision</h2>
          <p className="text">
            To become the most trusted virtual mentor for every learner preparing for a tech career — offering truly adaptive, AI-powered coaching that evolves with your goals.
          </p>
        </section>

        <section className="section">
          <h2 className="heading">Contact Us</h2>
          <p className="text">
            📧 Email: <a href="mailto:skarsalan8983@gmail.com" target="_blank" rel="noopener noreferrer">skarsalan8983@gmail.com</a><br />
            🔗 LinkedIn: <a href="https://www.linkedin.com/in/arsalanshaikh123/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/arsalanshaikh123/</a>
          </p>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

