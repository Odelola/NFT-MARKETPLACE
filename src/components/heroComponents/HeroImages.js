import React from 'react'
import './HeroImages.css'

const HeroImages = ({src, alt}) => {  
  return (
    <div className='hero-image'>
      <img src={src} alt={alt} />
    </div>
  )
}

export default HeroImages