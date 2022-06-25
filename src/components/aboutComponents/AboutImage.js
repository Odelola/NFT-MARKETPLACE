import React from 'react'
import './AboutImage.css'

const AboutImage = ({src, alt}) => {
  return (
    <div className="about-image_container">
      <img src={src} alt={alt} className="about-image" />
    </div>
  )
}

export default AboutImage