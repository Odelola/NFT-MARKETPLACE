import React from 'react'
import HeroDescription from '../components/heroComponents/HeroDescription'
import HeroImages from '../components/heroComponents/HeroImages'
import WiredSkull from '../images/navbarImages/nft-WiredSkull.png'
import SoftShapes from '../images/navbarImages/nft-SoftShapes.png'
import CameraOnBook from '../images/navbarImages/nft-CameraOnBook.png'
import PremiumGlass from '../images/navbarImages/nft-PremiumGlass.png'
import GradientBrain from '../images/navbarImages/nft-GradientBrain.png'
import CuteBunny from '../images/navbarImages/nft-CuteBunny.png'
import SquidGameToy from '../images/navbarImages/nft-SquidGameToy.png'
import './Hero.css'

const heroData = [
  {
    "id": 1,
    "src": WiredSkull,
    "alt": "Wired Skull",
  },
  {
    "id": 2,
    "src": SoftShapes,
    "alt": "Soft Shapes",
  },
  {
    "id": 3,
    "src": CameraOnBook,
    "alt": "Camera on book",
  },
  {
    "id": 4,
    "src": PremiumGlass,
    "alt": "Premium Glass",
  },
  {
    "id": 5,
    "src": GradientBrain,
    "alt": "Gradient Brain",
  },
  {
    "id": 6,
    "src": CuteBunny,
    "alt": "Cute Bunny",
  },
  {
    "id": 7,
    "src": SquidGameToy,
    "alt": "Squid Game Toy",
  },
]

const Hero = () => {
  return (
    <section id="hero">
        <div className="hero-inner">
            <HeroDescription />
            <div className="hero-images">
              {heroData.map((heroItem) => (
                <HeroImages key={heroItem.id} src={heroItem.src} alt={heroItem.alt} />
              ))}
            </div>
        </div>
    </section>
  )
}

export default Hero