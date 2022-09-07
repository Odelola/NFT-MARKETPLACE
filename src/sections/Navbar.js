import React, { useState } from "react"
import MenuToggler from "../components/navbarComponents/MenuToggler"
import NavLists from "../components/navbarComponents/NavLists"
import NavSearch from "../components/navbarComponents/NavSearch"
import { PrimaryButton } from "../components/uiComponents/buttons"
import searchIcon from "../images/navbarImages/searchIcon.svg"
import './Navbar.css'

const Navbar = () => {
  const [isactive, setIsactive] = useState(false)
  const toggleActive = () => {
    setIsactive(!isactive);
    if(!isactive){
      var xPos = window.scrollX;
          var yPos = window.scrollY;
          window.onscroll = () => {
            window.scroll(xPos, yPos);
          };
        } 
        else{
          window.onscroll = "";
      }
    }
  return (
    <nav>
        <div className="nav-inner">
            <div className="nav-logo">
              <h2>inertia<span>art</span></h2>
            </div>
            <MenuToggler className={`menu-toggler ${isactive ? "active": ""}`} onClick={toggleActive}  />
            <div className="nav-search">
              <NavSearch src={searchIcon} alt="Nav Search Icon" />
            </div>
            <div className={`nav-links ${isactive ? "active": null}`}>
              <MenuToggler className={`menu-toggler ${isactive ? "active": ""}`} onClick={toggleActive}  />
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