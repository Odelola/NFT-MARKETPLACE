import React from 'react';
import FeaturedHeader from '../components/featuredComponents/FeaturedHeader';
import { Card } from '../components/uiComponents/card';
import YellowPainting from '../images/featuredImages/nft-YellowPainting.png'
import DomeOnGradientBackground from '../images/featuredImages/nft-DomeOnGradientBackground.png'
import GradientBlob from '../images/featuredImages/nft-GradientBlob.png'
import './Featured.css'

const featuredData = [
    {
        "id": 1,
        "src":  YellowPainting,
        "alt": "Yellow Painting NFT",
        "user": "@Johny",
        "name": "Yellow Painting",
        "bidStatus": "Current Bid",
        "price": "0.005ETH",
        "buttonText": "Place a bid",
        "defaultTheme": true,
      },
      {
        "id": 2,
        "src": DomeOnGradientBackground,
        "alt": "Dome On Gradient Background NFT",
        "user": "@Jeniffer",
        "name": "Dome On Gradient",
        "bidStatus": "Current Bid",
        "price": "0.007ETH",
        "buttonText": "Place a bid",
        "defaultTheme": true,
      },
    {
        "id": 3,
        "src": GradientBlob,
        "alt": "Gradient Blob NFT",
        "user": "@Eric",
        "name": "Gradient Blob",
        "bidStatus": "Current Bid",
        "price": "0.008ETH",
        "buttonText": "Place a bid",
        "defaultTheme": false,
      },
]

const Featured = () => {
    return(
        <section id="featured">
        <div className="featured-inner">
            <FeaturedHeader />
            <div className="featured-cards">
                <div className="featured-cards_column">
                    {featuredData.map(({id, src, alt, user, name, bidStatus, price, buttonText, defaultTheme}) => {
                        return (
                            <Card key={id} src={src} alt={alt} user={user} name={name} bidStatus={bidStatus} price={price} buttonText={buttonText} defaultTheme={defaultTheme}/>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
    )
}

export default Featured;