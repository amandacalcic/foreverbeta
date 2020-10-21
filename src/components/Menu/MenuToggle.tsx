import * as React from "react";

import MenuIcon from '../../assets/images/icons/menu1.svg'
import MenuBackIcon from '../../assets/images/icons/menu2.svg'

export const MenuToggle = ({ toggle, isOpen } : any) => (
  <button className="menu-button" onClick={toggle}>
    {isOpen && 
      <img src={MenuBackIcon} alt="Menu Back Button" className="background-menu" /> 
    }
    {
      isOpen ? 
        <img src={MenuIcon} alt="Menu Button" className="button-position"/>
        : <img src={MenuIcon} alt="Menu Button" />
    }
  </button>
);
