import React from 'react'
import AboutHeader from '../components/aboutComponents/AboutHeader'
import AboutImage from '../components/aboutComponents/AboutImage'
import AboutDescription from '../components/aboutComponents/AboutDescription'
import aboutImageNft from '../images/aboutImages/aboutImage-nft.png'
import './About.css'

const About = () => {
  return (
    <section id="about">
        <div className="about-inner">
            <AboutHeader />
            <div className="about-row">
                <AboutImage src={aboutImageNft} alt="About Image" />
                <AboutDescription />
            </div>
        </div>
    </section>
  )
}

export default About