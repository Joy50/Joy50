// AboutMe.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImage from '../images/profile.jpg';
import EducationItem from './EducationItem';
import JobExperienceItem from './JobExperienceItem';
import SecondarySchoolLogo from '../images/rzs.webp';
import hsclogo from '../images/download.png';
import ArmyLogo from '../images/army.png';
import DarazLogo from '../images/daraz.png'

function AboutMe() {
    const [educationalInstitutes, setEducationalInstitutes] = useState([
        {
            logo: SecondarySchoolLogo,
            name: 'Rangpur Zilla school',
            degree: 'Secondary School Certificate',
            group: 'Science',
            result: '5.00',
            showDetails: false,
        },
        {
            logo: hsclogo,
            name: 'Rangpur Government College',
            degree: 'Higher School Certificate',
            group: 'Science',
            result: '4.50',
            showDetails: false,
        },
        // Add other educational institutes as needed
    ]);

    const [jobExperiences, setJobExperiences] = useState([
        {
            logo: ArmyLogo,
            name: 'Bangladesh Army',
            designation: 'IT Instructor/Support Engineer',
            fromDate: '01 October 2021',
            toDate: '30 November 2023',
            showDetails: false,
        },
        {
            logo: DarazLogo,
            name: 'Daraz Bangladesh Limited',
            designation: 'Jr. Associate',
            fromDate: '01 January 2021',
            toDate: '30 September 2021',
            showDetails: false,
        },
        // Add other job experiences as needed
    ]);

    const handleMouseEnter = (category, index) => {
        if (category === 'education') {
            const updatedInstitutes = [...educationalInstitutes];
            updatedInstitutes[index].showDetails = true;
            setEducationalInstitutes(updatedInstitutes);
        } else if (category === 'job') {
            const updatedExperiences = [...jobExperiences];
            updatedExperiences[index].showDetails = true;
            setJobExperiences(updatedExperiences);
        }
    };

    const handleMouseLeave = (category, index) => {
        if (category === 'education') {
            const updatedInstitutes = [...educationalInstitutes];
            updatedInstitutes[index].showDetails = false;
            setEducationalInstitutes(updatedInstitutes);
        } else if (category === 'job') {
            const updatedExperiences = [...jobExperiences];
            updatedExperiences[index].showDetails = false;
            setJobExperiences(updatedExperiences);
        }
    };

    return (
        <Container className="my-5" id='about-me'>
            <Row>
                {/* Left Column with Picture */}
                <Col md={3}>
                    <img src={myImage} alt="My Picture" className="img-fluid" style={{ width: '250px', height: '250px', alignItems: 'center' }} />
                </Col>
                {/* Right Column with About Me Passage */}
                <Col md={9}>
                    <h2>About Me</h2>
                    <p className="about-me">
                        Learning with enthusiasm is the motto. Technology Geek interested in the Dynamic Development of modern technology.
                        Skilled in Python, Machine Learning, Artificial Intelligence, Data Warehousing and Data Mining, MySQL Relational Database, PHP, Java, Management, Latex, Git, and Android Development.
                        Solving programming problems on various online judges like UVA, HackerRank, Uri, and so on using C, C++ programming language.
                        No problem is too big for me: the bigger the challenge, the more fun! And as I always say, there are always at least two solutions to every problem.
                    </p>
                </Col>
            </Row>

            {/* Education Section */}
            <Row className="mt-3">
                <Col>
                    <h3>Education</h3>
                    <ul className="list-unstyled d-flex flex-wrap">
                        {educationalInstitutes.map((institute, index) => (
                            <EducationItem
                                key={index}
                                institute={institute}
                                index={index}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                            />
                        ))}
                    </ul>
                </Col>
            </Row>

            {/* Job Experience Section */}
            <Row className="mt-3">
                <Col>
                    <h3>Job Experience</h3>
                    <ul className="list-unstyled d-flex flex-wrap">
                        {jobExperiences.map((experience, index) => (
                            <JobExperienceItem
                                key={index}
                                experience={experience}
                                index={index}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                            />
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;
