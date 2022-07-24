import React from 'react'
import './NavLists.css'

const NavLists = ({linkName, linkPath}) => {
  return (
    <>
      <a href={`#${linkPath}`} className="nav-link">{linkName}</a>
    </>
  )
}

export default NavLists