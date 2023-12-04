import React, { useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import profileImage from '../images/1.jpg';

// Testimonial data
const testimonials = [
  {
    id: 1,
    image: profileImage,
    author: 'Shahadat Hossain Jami',
    position: 'Head of Acquisition, Daraz Bangladesh Limited',
    quote:
      'Having someone in the team ready to take any sort of challenges and bringing results is a blessing. Joy was there to help the team whenever there were a new project to execute. An extrovert individual with lots of positive energy along with good communication skill. Keep up the good work, and you shall be a fine leader someday.',
  },
  {
    id: 2,
    author: 'Abu Saleh Musa Mia',
    image: profileImage,
    position: 'Researcher, University of Aizu',
    quote:
      'Joy is extremely passionate about learning new things. He consistently updates himself with the latest technologies, tools, and practices. I am hopeful that he will soon become a distinguished figure in the fields of Artificial Intelligence, IoT, and both Android and iOS app development. I had the privilege of being his undergraduate thesis supervisor. He not only successfully completed his project but also co-authored a paper with me that was published in a Springer book chapter. Mr. Joy is always proactive in providing input and devising solutions to challenges that emerge during projects. He possesses a remarkable ability to tackle challenges head-on and adapt to change. Additionally, he is an invaluable colleague in the office. He consistently maintains a positive attitude, making him not only a pleasure to work with but also an excellent sounding board for ideas.',
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const truncateLength = 200;
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (testimonialId) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [testimonialId]: !prevExpanded[testimonialId],
    }));
  };

  return (
    <Container className="my-5" id='testimonials'>
      <h2>Testimonials</h2>
      <Row>
        {testimonials.map((testimonial) => (
          <Col key={testimonial.id} md={6} lg={4} className="mb-4">
            <Card>
              <img
                src={testimonial.image}
                alt=""
                style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop:'20px' }}
                className="mx-auto d-block"
              />
              <Card.Body>
                <Card.Text>
                  {expanded[testimonial.id]
                    ? testimonial.quote
                    : `${testimonial.quote.slice(0, truncateLength)}${
                        testimonial.quote.length > truncateLength ? '...' : ''
                      }`}
                </Card.Text>
                {testimonial.quote.length > truncateLength && (
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => toggleExpand(testimonial.id)}
                  >
                    {expanded[testimonial.id] ? 'View Less' : 'View More'}
                  </Button>
                )}
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <strong>{testimonial.author}</strong>
                    <p className="mb-0">{testimonial.position}</p>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonial;
