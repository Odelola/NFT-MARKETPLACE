import React, { useState } from "react"
import MenuToggler from "../components/navbarComponents/MenuToggler"
import NavLists from "../components/navbarComponents/NavLists"
import NavSearch from "../components/navbarComponents/NavSearch"
import { PrimaryButton } from "../components/uiComponents/buttons"
import searchIcon from "../images/navbarImages/searchIcon.svg"
import './Navbar.css'


const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const forcedScroll = () => {
    window.scrollTo(0, 0)
  }
  const toggleActive = () => {
    setIsActive(!isActive);
    // if(!isActive){
    //   window.addEventListener('scroll', forcedScroll)
    // }
    // if(isActive){
    //     window.removeEventListener('scroll', forcedScroll)
    //   }
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
              <NavLists link="Collections" />
              <NavLists link="Feature" />
              <NavLists link="FAQ" />
              <PrimaryButton title="Select Wallet" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar