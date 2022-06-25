import React from 'react'
import CollectionHeader from '../components/collectionComponents/CollectionHeader'
import CollectionFilters from '../components/collectionComponents/CollectionFilters'
import {Card } from '../components/uiComponents/card'
import YellowPainting from '../images/collectionImages/nft-YellowPainting.png'
import DomeOnGradientBackground from '../images/collectionImages/nft-DomeOnGradientBackground.png'
import GradientBlob from '../images/collectionImages/nft-GradientBlob.png'
import GradientAbstractShapes from '../images/collectionImages/nft-GradientAbstractShapes.png'
import BlackAndWhiteModels from '../images/collectionImages/nft-BlackAndWhiteModels.png'
import RingLightCloth from '../images/collectionImages/nft-RingLightCloth.png'
import DollPainting from '../images/collectionImages/nft-DollPainting.png'
import MetalArchitecture from '../images/collectionImages/nft-MetalArchitecture.png'
import SphereAndMagnet from '../images/collectionImages/nft-SphereAndMagnet.png'
import './Collection.css'

const collectionData = [
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
        "defaultTheme": true,
      },
    {
        "id": 4,
        "src": GradientAbstractShapes,
        "alt": "Gradient Blob NFT",
        "user": "@Eric",
        "name": "Gradient Blob",
        "bidStatus": "Current Bid",
        "price": "0.007ETH",
        "buttonText": "Place a bid",
        "defaultTheme": true,
      },
      {
        "id": 5,
        "src": BlackAndWhiteModels,
        "alt": "Black And White Models",
        "user": "@Jake",
        "name": "3D Models",
        "bidStatus": "Current Bid",
        "price": "0.009ETH",
        "buttonText": "Place a bid",
        "defaultTheme": false,
      },
      {
        "id": 6,
        "src": RingLightCloth,
        "alt": "Ring Light Cloth NFT",
        "user": "@Andrea",
        "name": "Ring Light Cloth",
        "bidStatus": "Current Bid",
        "price": "0.008ETH",
        "buttonText": "Place a bid",
        "defaultTheme": true,
      },
      {
        "id": 7,
        "src": DollPainting,
        "alt": "Doll Painting NFT",
        "user": "@Ariana",
        "name": "Doll Painting",
        "bidStatus": "Current Bid",
        "price": "0.004ETH",
        "buttonText": "Place a bid",
        "defaultTheme": true,
      },
      {
        "id": 8,
        "src": MetalArchitecture,
        "alt": "Metal Architecture ",
        "user": "@Natasha",
        "name": "Metal Architecture",
        "bidStatus": "Current Bid",
        "price": "0.006ETH",
        "buttonText": "Place a bid",
        "defaultTheme": true,
      },
      {
        "id": 9,
        "src": SphereAndMagnet,
        "alt": "Spher eAnd Magnet NFT",
        "user": "@Kelly",
        "name": "Sphere And Magnet",
        "bidStatus": "Current Bid",
        "price": "0.008ETH",
        "buttonText": "Place a bid",
        "defaultTheme": true,
      },
]
const Collection = () => {
    return(
        <section id="collection">
        <div className="collection-inner">
            <CollectionHeader />
            <CollectionFilters />
            <div className="collection-cards">
                <div className="collection-cards_column">
                    {collectionData.map(({id, src, alt, user, name, bidStatus, price, buttonText, defaultTheme}) => {
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

export default Collection