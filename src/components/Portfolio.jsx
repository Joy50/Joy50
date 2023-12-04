// Portfolio.js

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getRepositories } from '../utility/GitHub';
import ProjectDetails from './ProjectDetails';

function Portfolio({ username }) {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const data = await getRepositories(username);
        console.log('Fetched repositories:', data);
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, [username]);

  const handleViewAllClick = () => {
    navigate('/allprojects');
  };

  return (
    <Container className="my-5" id="portfolio">
      <h2 className="mb-4 d-flex justify-content-between align-items-center">
        Portfolio
        <Button variant="secondary" onClick={handleViewAllClick}>
          View All
        </Button>
      </h2>
      <Row className="justify-content-start">
        {repositories.length > 0 ? (
          repositories.map((repo) => (
            <Col key={repo.id} md={4} className="mb-4">
              {repo && (
                <Link to={`/project/${repo.id}`} style={{ textDecoration: 'none' }}>
                  <Card className="custom-card">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{repo.full_name}</Card.Title>
                      <Card.Text>
                        <Badge className="me-1" bg="secondary">
                          {repo.language}
                        </Badge>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              )}
            </Col>
          ))
        ) : (
          <p>No repositories available.</p>
        )}
      </Row>
    </Container>
  );
}

export default Portfolio;
