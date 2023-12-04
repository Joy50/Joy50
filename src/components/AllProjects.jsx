// AllProjects.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import projectImage1 from '../images/background.jpg';
import projectImage2 from '../images/background2.jpg';

const projects = [
  {
    id: 1,
    name: 'Question Automation System',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna eu justo convallis fringilla.',
    technologies: ['React', 'Bootstrap', 'Django', 'MySQL'],
    image: projectImage1,
  },
  {
    id: 2,
    name: 'Project Two',
    description: 'Duis ullamcorper, dolor vel volutpat feugiat, ligula turpis ultricies dolor, vitae elementum elit libero id ante.',
    technologies: ['Angular', 'Material UI', 'Express.js'],
    image: projectImage2,
  },
  // Add more projects as needed
];

function AllProjects() {
  return (
    <Container className="my-5">
      <h2 className="mb-4">All Projects</h2>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} md={4} className="mb-4">
            {/* Use Link to navigate to project details */}
            <Link to={`/project-details/${project.id}`} style={{ textDecoration: 'none' }}>
              <Card className="custom-card">
                <Card.Img variant="top" src={project.image} alt={project.name} className="card-img" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Text>
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} className="me-1" bg="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </Card.Text>
                  {/* Use Link to navigate back to Portfolio */}
                  <Link to="/portfolio">
                    <Button variant="primary">Back to Portfolio</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllProjects;