import React from 'react'
import { PrimaryButtonAltSlim } from '../uiComponents/buttons'
import './CollectionFilters.css'

const CollectionFilters = () => {
    // const [isActive, setIsActive] = useState(false);
    // const makeActive = () => {
    // }
  return (
    <div className='collection-filters'>
        <PrimaryButtonAltSlim title="Art" />
        <PrimaryButtonAltSlim title="Sport" />
        <PrimaryButtonAltSlim title="Photography" />
        <PrimaryButtonAltSlim title="Pattern" />
    </div>
  )
}

export default CollectionFilters