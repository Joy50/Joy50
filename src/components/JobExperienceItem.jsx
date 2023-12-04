// JobExperienceItem.js
import React from 'react';
import { Button } from 'react-bootstrap';

function JobExperienceItem({ experience, index, handleMouseEnter, handleMouseLeave }) {
    return (
        <li style={{ marginBottom: '10px', marginRight: '20px', transition: 'margin 0.3s ease-in-out' }}>
            <Button
                variant="link"
                className="p-0 text-decoration-none"
                onMouseEnter={() => handleMouseEnter('job', index)}
                onMouseLeave={() => handleMouseLeave('job', index)}
            >
                <img src={experience.logo} alt={`${experience.name} Logo`} style={{ width: '60px', height: '60px', marginRight: '10px' }} />
                <strong>{experience.name}</strong>
            </Button>
            {experience.showDetails && (
                <div className="mt-2" style={{ opacity: 1, transition: 'opacity 0.3s ease-in-out' }}>
                    <ul>
                        <li>Designation: {experience.designation}</li>
                        <li>From: {experience.fromDate} - To: {experience.toDate}</li>
                    </ul>
                </div>
            )}
        </li>
    );
}

export default JobExperienceItem;