import * as React from "react";

import MenuIcon from '../../assets/images/icons/menu1.svg'
import MenuBackIcon from '../../assets/images/icons/menu2.svg'

export const MenuToggle = ({ toggle, isOpen } : any) => (
  <button className="menu-button" onClick={toggle}>
    {isOpen && 
      <img src={MenuBackIcon} alt="Menu Back Button" style={{ position: 'absolute', left: '3rem', top: '-13rem' }} /> 
    }
    {
      isOpen ? 
        <img src={MenuIcon} alt="Menu Button" style={{ position: 'absolute', left: '5rem', top: `11.5rem` }}/>
        : <img src={MenuIcon} alt="Menu Button" />
    }
  </button>
);
