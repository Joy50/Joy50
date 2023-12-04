// ProjectDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  const { id } = useParams();
  const [repository, setRepository] = useState({});
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    // Fetch repository details using the id parameter
    const fetchRepositoryDetails = async () => {
      try {
        const response = await fetch(`https://api.github.com/repositories/${id}`);
        const repositoryDetails = await response.json();
        setRepository(repositoryDetails);

        // Fetch the README content
        const readmeResponse = await fetch(repositoryDetails.url + '/readme');
        const readmeData = await readmeResponse.json();

        // Decode the content from base64
        const decodedContent = atob(readmeData.content);
        setReadmeContent(decodedContent);
      } catch (error) {
        console.error('Error fetching repository details:', error);
      }
    };

    fetchRepositoryDetails();
  }, [id]);

  return (
    <div>
      <h2>{repository.full_name}</h2>
      <div>
        {/* Display the decoded readme content */}
        <pre>{readmeContent}</pre>
      </div>
      <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
        See the code on GitHub
      </a>
    </div>
  );
}

export default ProjectDetails;
