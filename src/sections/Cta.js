import React from 'react'
import { SecondaryButtonAlt } from '../components/uiComponents/buttons'
import './Cta.css'

const Cta = () => {
  return (
    <section id="cta">
      <div className="cta-inner">
        <div className="cta-details">
          <h2>Get ready to collect <br /> our NFT</h2>
          <SecondaryButtonAlt title="Get Started" />
        </div>
      </div>
    </section>
  )
}

export default Cta