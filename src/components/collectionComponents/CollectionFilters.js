import React, { useEffect } from 'react'
import './CollectionFilters.css'

const CollectionFilters = ({ initial, setFiltered, type, setType }) => {
useEffect(() => {
  if(type === ""){
    setFiltered(initial);
    return
  }

  const filtered = initial.filter((cardItem) => cardItem.type.includes(type));
  setFiltered(filtered)
  console.log(type)
}, [type])

  return (
    <div className='collection-filters'>
          <button className={type === "" ? "active" : ""} onClick={() => setType("")}>All</button>
          <button className={type === "art" ? "active" : ""} onClick={() => setType("art")}>Art</button>
          <button className={type === "photography" ? "active" : ""} onClick={() => setType("photography")}>Photography</button>
          <button className={type === "pattern" ? "active" : ""} onClick={() => setType("pattern")}>Pattern</button>
    </div>
  )
}

export default CollectionFilters