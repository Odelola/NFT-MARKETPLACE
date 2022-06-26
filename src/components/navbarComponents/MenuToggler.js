import React from 'react'
import './MenuToggler.css'

const MenuToggler = (props) => {
    // const [isActive, setIsActive] = useState(false)
    
    // const toggleActive = () => {
    //   return setIsActive(!isActive);
    // }
  return (
    <div className="menu-toggler" {...props}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default MenuToggler