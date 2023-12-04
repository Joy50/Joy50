// Blog.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlogDescription from './BlogDescription';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const apiKey = 'AIzaSyAzjZMMDBCvtyY_3IIkRDxgmaTm20svhHU';
        const blogId = '3596691293626312591';
  
        const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`;
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error(`Failed to fetch blog posts: ${response.status}`);
        }
  
        const fetchedBlogPosts = await response.json();
        setBlogPosts(fetchedBlogPosts.items);
      } catch (error) {
        console.error('Error fetching blog posts', error);
      }
    };
  
    fetchBlogPosts();
  }, []);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleClose = () => {
    setSelectedBlog(null);
  };

  return (
    <Container className="my-5" id="blogs">
      <h2>Blogs</h2>
      <Row>
        {blogPosts &&
          blogPosts.map((blog) => (
            <Col key={blog.id} md={4} className="mb-4">
              <Card
                style={{ minHeight: '100%' }}
                as={Link}
                to={`/blog/${blog.id}`}
                onClick={() => handleBlogClick(blog)}
                className="blog-card"
              >
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{blog.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>

      {selectedBlog && (
        <BlogDescription blog={selectedBlog} onClose={handleClose} />
      )}
    </Container>
  );
}

export default Blog;
