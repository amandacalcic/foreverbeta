import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

import './styles.css'

// clip-path: ellipse(130px 140px at 10% 20%);

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `polygon(100% 0, 100% 100%, 0 100%, 0 0)`,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: `polygon(0% 0, 0% 100%, 0 100%, 0 0)`,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 300,
      damping: 35
    }
  }
};

const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className="nav-menu"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      style={{width: isOpen ? '100vw' : '1rem'}}
    >

      <div style={{display: isOpen ? 'unset' : 'none'}}>
        <motion.div className="background" variants={sidebar} />
        <Navigation />
      </div>
      <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
    </motion.nav>
  );
};

export default Menu
