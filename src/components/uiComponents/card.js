import React from 'react';
import { PrimaryButton, PrimaryButtonOutline } from './buttons';
import './card.css'

export const Card = ({src, alt, user, name, bidStatus, price, buttonText, defaultTheme}) => {
    return(
        <div className={`card ${defaultTheme ? "card-dark" : "card-dark-gray"}`}>
            <div className="card-inner">
                <div className="card-image">
                <img src={src} alt={alt} />
                </div>
                <div className="card-details">
                    <div className="card-user">
                        <span>{user}</span>
                        <h4>{name}</h4>
                    </div>
                    <div className="card-price">
                        <span>{bidStatus}</span>
                        <h4>{price}</h4>
                    </div>
                </div>
                <div className="card-button">
                    {defaultTheme ? (<PrimaryButton title={buttonText} />): (<PrimaryButtonOutline title={buttonText} />)}
                </div>
            </div>
        </div>
    )
}


export const CardSecondary = ({imageSrc, imageAlt,  profileSrc, profileAlt, name, paragraph, buttonText, iconPlus, defaultTheme}) => {
    return(
        <div className={`card card-secondary ${defaultTheme ? "card-dark" : "card-dark-gray"}`}>
            <div className="card-secondary-inner">
                <div className="card-secondary-image">
                    <img src={imageSrc} alt={imageAlt} />
                    <div className="card-secondary-profile">
                        <img src={profileSrc} alt={profileAlt} />
                    </div>
                </div>
                <div className="card-secondary-details">
                    <h4>{name}</h4>
                    <p>{paragraph}</p>
                    <div className="card-secondary-button">
                        {/* {iconPlus ? buttonText=`+ ${buttonText}` : buttonText} */}
                        {defaultTheme ? (<PrimaryButton title={`${iconPlus ? buttonText="+ " + buttonText: buttonText}`} />): (<PrimaryButtonOutline title={`${iconPlus ? buttonText="+ " + buttonText: buttonText}`} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
