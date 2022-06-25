import React from 'react';
import './buttons.css'

export const PrimaryButton = ({title}) => {
    return(
        <button className="primaryButton">{title}</button>
    )
}
export const PrimaryButtonOutline = ({title}) => {
    return(
        <button className="primaryButtonOutline" data={title}></button>
    )
}
export const PrimaryButtonAltSlim = ({title}) => {
    return(
        <button className="primaryButtonAltSlim">{title}</button>
    )
}
export const SecondaryButton = ({title}) => {
    return(
        <button className="secondaryButton">{title}</button>
    )
}
export const SecondaryButtonAlt = ({title}) => {
    return(
        <button className="secondaryButtonAlt">{title}</button>
    )
}

