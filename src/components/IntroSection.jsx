import React from 'react';
import { Container } from 'react-bootstrap';
import Typed from 'react-typed';
import backgroundImageUrl from '../images/background2.jpg';

function IntroSection() {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    };

    return (
        <Container fluid className="my-section">
            <div className="d-flex flex-column align-items-center justify-content-center text-white" style={sectionStyle}>
                <h1>Mahmudul Haque Joy</h1>
                <h5><p>Software Engineer | Technical Geek</p></h5>
                <Typed
                    strings={['Learning is the ultimate goal...']}
                    typeSpeed={25}
                    backSpeed={10}
                    loop
                />
            </div>
        </Container>
    );
}

export default IntroSection;
