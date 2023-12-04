import React from 'react'
import NavigationBar from './NavigationBar'
import IntroSection from './IntroSection'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Testimonial from './Testimonials'
import Blog from './Blog'
import ContactMe from './ContactMe'
import Footer from './Footer'

function Landing() {
    return (
        <div>
            <NavigationBar/>
            <IntroSection/>
            <AboutMe/>
            <Portfolio/>
            <Testimonial/>
            <Blog/>
            <ContactMe/>
            <Footer/>
        </div>
    )
}

export default Landing