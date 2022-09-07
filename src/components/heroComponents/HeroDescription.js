import React from 'react'
import { PrimaryButton, SecondaryButton } from '../uiComponents/buttons'
import './HeroDescription.css'

const heroDescriptionData = [
  {
    "id": 1,
    "amount": '37k+',
    "title": 'Artworks'
  },
  {
    "id": 2,
    "amount": '20k+',
    "title": 'Artists'
  },
  {
    "id": 3,
    "amount": '99k+',
    "title": 'Aucations'
  }
]

const HeroDescription = () => {
  return (
    <div className="hero-description">
      <h3 className="hero-heading">Create, Sell & <br />Collect Your Own <br />Creative NFT</h3>
      <p className="hero-desc">Smart NFTs that scale infinitely. Fast, cheap transactions. We build an ecosystem that naturally rewards you for holding and auctioning on NFTs.
</p>
      <div className="hero-buttons">
        <PrimaryButton title="Explore Now" />
        <SecondaryButton title="Sell NFT" />
      </div>
      <div className="hero-credits">
        {heroDescriptionData.map((heroDescriptionDataItem) => (
          <div className="hero-credits_column" key={heroDescriptionDataItem.id}>
            <h3>{heroDescriptionDataItem.amount}</h3>
            <span>{heroDescriptionDataItem.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroDescription