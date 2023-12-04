import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-white py-4" style={{backgroundColor:"#a51e1e"}}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Information</h5>
            <p>Email: joybaust50@gmail.com</p>
            <p>Phone: +8801762956051</p>
          </Col>
          <Col md={6}>
            <h5>Follow Us</h5>
            {/* Add your social media icons or links here */}
            <p>Facebook | Twitter | Instagram</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Joy50. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;