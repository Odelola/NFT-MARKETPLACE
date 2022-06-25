import React from 'react';
import CreatorHeader from '../components/creatorComponents/CreatorHeader';
import { CardSecondary } from '../components/uiComponents/card';
import GradientMixedBackground from '../images/creatorImages/creator-GradientMixedBackground.png'
import IsometricTiles from '../images/creatorImages/creator-IsometricTiles.png'
import GradientWaveLines from '../images/creatorImages/creator-GradientWaveLines.png'
import LucilleNora from '../images/creatorImages/creator-LucilleNora.png'
import NickJenkins from '../images/creatorImages/creator-NickJenkins.png'
import NoemiMelina from '../images/creatorImages/creator-NoemiMelina.png'
import './Creator.css'

const creatorData = [
    {
        "id": 1,
        "imageSrc":  GradientMixedBackground,
        "imageAlt": "Gradient Mixed Background NFT",
        "profileSrc": LucilleNora,
        "profileAlt": "Lucille Nora - Creator",
        "name": "Lucille Nora",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "buttonText": "Follow",
        "iconPlus": true,
        "defaultTheme": true,
      },
      {
        "id": 2,
        "imageSrc": IsometricTiles,
        "imageAlt": "Isometric Tiles NFT",
        "profileSrc": NickJenkins,
        "profileAlt": "Nick Jenkins - Creator",
        "name": "Nick Jenkins",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "buttonText": "Following",
        "iconPlus": true,
        "defaultTheme": false,
      },
    {
        "id": 3,
        "imageSrc": GradientWaveLines,
        "imageAlt": "Gradient Wave Lines NFT",
        "profileSrc": NoemiMelina,
        "profileAlt": "Noemi Melina - Creator",
        "name": "Noemi Melina",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "buttonText": "Follow",
        "iconPlus": true,
        "defaultTheme": true,
      },
]

const Creator = () => {
    return(
        <section id="creator">
        <div className="creator-inner">
            <CreatorHeader />
            <div className="creator-cards">
                <div className="creator-cards_column">
                    {creatorData.map(({id, imageSrc, imageAlt, profileSrc, profileAlt, name, paragraph, buttonText, iconPlus, defaultTheme}) => {
                        return (
                            <CardSecondary key={id} imageSrc={imageSrc} imageAlt={imageAlt} profileSrc={profileSrc} profileAlt={profileAlt} name={name} paragraph={paragraph} buttonText={buttonText} iconPlus={iconPlus} defaultTheme={defaultTheme} />
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
    )
}

export default Creator;