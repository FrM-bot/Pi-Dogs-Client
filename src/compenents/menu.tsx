import React from 'react'
import menuStyles from './menu.module.css'
import NavLinks from './navLinks'

const MenuMovile = ({ onClose }) => {
  return (
    <>
      <div className={menuStyles.click_to_close} onClick={onClose}/>
      <div className={menuStyles.menu}>
          <NavLinks onClose={onClose} />
      </div>
    </>

  )
}

export default MenuMovile