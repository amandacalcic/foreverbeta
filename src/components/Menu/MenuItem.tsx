import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export interface DataProps {
    id: number;
    description: string;
    link: string;
    icon: string;
}

interface MenuItemProps {
    item: DataProps;
}

export const MenuItem: React.FC<MenuItemProps> = ({item}) => {
    return (
        <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        >
        
            {
              item.link !== "#" ? 
              <Link className="menu-item" to={item.link}>
                <div className="icon-placeholder">
                    <img src={require(`../../assets/images/icons/menu/${item.icon}`)} alt="Menu Icon"/>
                </div>
                <p className="text-placeholder">{item.description}</p>
              </Link>
              :
              <div className="menu-item" onClick={() => window.location.reload()}>
                  <div className="icon-placeholder">
                      <img src={require(`../../assets/images/icons/menu/${item.icon}`)} alt="Menu Icon"/>
                  </div>
                  <p className="text-placeholder">{item.description}</p>
              </div>
            }
        </motion.li>
    );
};