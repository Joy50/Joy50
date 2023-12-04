// EducationItem.js
import React from 'react';
import { Button } from 'react-bootstrap';

function EducationItem({ institute, index, handleMouseEnter, handleMouseLeave }) {
    return (
        <li style={{ marginBottom: '10px', marginRight: '20px', transition: 'margin 0.3s ease-in-out' }}>
            <Button
                variant="link"
                className="p-0 text-decoration-none"
                onMouseEnter={() => handleMouseEnter('education', index)}
                onMouseLeave={() => handleMouseLeave('education', index)}
            >
                <img src={institute.logo} alt={`${institute.name} Logo`} style={{ width: '60px', height: '60px', marginRight: '10px' }} />
                <strong>{institute.name}</strong>
            </Button>
            {institute.showDetails && (
                <div className="mt-2" style={{ opacity: 1, transition: 'opacity 0.3s ease-in-out' }}>
                    <ul>
                        <li>{institute.degree}</li>
                        <li>Group: {institute.group}</li>
                        <li>Result: {institute.result}</li>
                    </ul>
                </div>
            )}
        </li>
    );
}

export default EducationItem;
