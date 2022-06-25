import React from 'react'
import './NavSearch.css'

const NavSearch = ({src, alt}) => {
  return (
    <div className="search-input_wrapper">
        <img src={src} alt={alt} />
        <input type="text" name="search" placeholder="Search items and collections" id="searchInput" autoComplete='off' />
    </div>
  )
}

export default NavSearch