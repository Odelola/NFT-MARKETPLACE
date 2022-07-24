import React, { useState } from "react"
import { gsap } from "gsap";
import MenuToggler from "../components/navbarComponents/MenuToggler"
import NavLists from "../components/navbarComponents/NavLists"
import NavSearch from "../components/navbarComponents/NavSearch"
import { PrimaryButton } from "../components/uiComponents/buttons"
import searchIcon from "../images/navbarImages/searchIcon.svg"
import './Navbar.css'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleActive = () => {
    setIsActive(!isActive);
    if(!isActive){
      var xPos = window.scrollX;
          var yPos = window.scrollY;
          window.onscroll = () => {
            window.scroll(xPos, yPos);
          };
          // console.log("mallam")
          // var timeline = gsap.timeline({ paused: true })
          // timeline.to(".nav-links", {clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)", ease: "power3.out", duration: 2}).reverse();
          // gsap.to(".nav-links", {rotation: 27, x: 100, display: "flex", duration: 1}).reverse();
        }
        else{
          window.onscroll = "";
          // var timeline = gsap.timeline()
          // timeline.reverse();
      }
    }
    if(!isActive){
    }
  return (
    <nav>
        <div className="nav-inner">
            <div className="nav-logo">
              <h2>inertia<span>art</span></h2>
            </div>
            <MenuToggler className={`menu-toggler ${isActive ? "active": null}`} onClick={toggleActive} isActive={isActive} />
            <div className="nav-search">
              <NavSearch src={searchIcon} alt="Nav Search Icon" />
            </div>
            <div className={`nav-links ${isActive ? "active": null}`}>
              <NavLists linkName="Collections" linkPath="collection" />
              <NavLists linkName="Feature" linkPath="featured"/>
              <NavLists linkName="FAQ" linkPath="0"/>
              <PrimaryButton title="Select Wallet" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar