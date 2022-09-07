import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="footer-row">
          <div className="footer-header">
            <div className="footer-logo">
              <h2>inertia<span>art</span></h2>
            </div>
            <p>The best NFT marketplace website in the world and feel your experience in selling or buy our work</p>
          </div>
          <div className="footer-links-column">
            <h3 className='footer-links_header'>About</h3>
            <div className="footer-links">
              <a href="#0" className="footer-link">Product</a>
              <a href="#0" className="footer-link">Resource</a>
              <a href="#0" className="footer-link">Terrm & Condition</a>
              <a href="#0" className="footer-link">FAQ</a>
            </div>
          </div>
          <div className="footer-links-column">
            <h3 className='footer-links_header'>Company</h3>
            <div className="footer-links">
              <a href="#0" className="footer-link">Our Team</a>
              <a href="#0" className="footer-link">Partner With Us</a>
              <a href="#0" className="footer-link">Privacy & Policy</a>
              <a href="#0" className="footer-link">Features</a>
            </div>
          </div>
          <div className="footer-links-column">
            <h3 className='footer-links_header'>Contact</h3>
            <div className="footer-links">
              <a href="tel:; +012 3456789"  className="footer-link">+012 3456789</a>
              <a href="mailto:adorableprogrammer@gmail.com" className="footer-link">adorableprogrammer@gmail.com</a>
              <a href="#0" className="footer-link">Terms & Conditions</a>
              <a href="#0" className="footer-link">FAQ</a>
            </div>
          </div>
        </div>
        <div className="footer-credits">
          <p>Created by <a href="https://odelolaoluwaseyi.com" rel="noopener noreferrer" target="_blank" className="footer-author"> Oluwaseyi Odelola</a><span> | </span>Design by Zarror <span> | </span>All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer