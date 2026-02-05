import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 0,
      name: "Dr. Sarah Mitchell",
      rating: 4.9,
      date: "15 Jan, 2026",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      review: "PneumoScan has revolutionized our diagnostic workflow. The accuracy is remarkable and it saves us valuable time in emergency situations. Highly recommended for any pediatric healthcare facility."
    },
    {
      id: 1,
      name: "Dr. James Anderson",
      rating: 4.9,
      date: "22 Jan, 2026",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      review: "They have awesome AI detection service. I wouldn't recommend going to anyone else. All of the results are accurate. Definitely love the way PneumoScan works for our clinic."
    },
    {
      id: 2,
      name: "Dr. Emily Roberts",
      rating: 4.8,
      date: "28 Jan, 2026",
      avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face",
      review: "As a pediatrician, having quick and reliable pneumonia detection is crucial. PneumoScan delivers exactly that. The interface is intuitive and the results are consistently accurate."
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 
        className={`testimonials-title scroll-animate fade-up ${titleVisible ? 'visible' : ''}`}
        ref={titleRef}
      >Customer Reviews</h2>
      <div 
        className={`testimonials-container scroll-animate blur-in ${contentVisible ? 'visible' : ''}`}
        ref={contentRef}
      >
        {/* Left Side - Reviewers List */}
        <div className="testimonials-left">
          <div className="reviewers-timeline">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`reviewer-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="reviewer-avatar"
                />
                <div className="reviewer-info">
                  <h4 className="reviewer-name">{testimonial.name}</h4>
                  <div className="reviewer-meta">
                    <span className="reviewer-star">★</span>
                    <span className="reviewer-rating">{testimonial.rating}</span>
                    <span className="reviewer-date">on {testimonial.date}</span>
                  </div>
                </div>
                <div className="timeline-connector"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Active Review */}
        <div className="testimonials-right">
          <div className="review-content">
            <span className="quote-mark">"</span>
            <p className="review-text">
              <span className="review-initial">{testimonials[activeIndex].review.charAt(0)}</span>
              {testimonials[activeIndex].review.slice(1)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
