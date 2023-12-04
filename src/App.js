// App.jsx
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroSection from './components/IntroSection';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer'; // Adjust the path if needed
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonials';
import Blog from './components/Blog';
import ContactMe from './components/ContactMe';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const githubUsername = 'Joy50';
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <br></br>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <IntroSection />
                <AboutMe />
                <Portfolio username={githubUsername}/>
                <Testimonial />
                <Blog />
                <ContactMe />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;