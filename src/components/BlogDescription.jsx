// BlogDescription.js
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const BlogDescription = ({ blog, onClose }) => {
  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Button
            variant="outline-secondary"
            className="close-button"
            onClick={onClose}
          >
            &times;
          </Button>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text dangerouslySetInnerHTML={{ __html: blog.content }} />
          {/* Add more details as needed */}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BlogDescription;
