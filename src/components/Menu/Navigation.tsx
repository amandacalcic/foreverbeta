import * as React from "react";
import { motion } from "framer-motion";

import { DataProps, MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itensMenu = [
  { id: 0, description:"Reiniciar", link:"/feed", icon: "arrow.svg"},
  { id: 1, description:"Sair", link:"/", icon: "exit.svg"},
  { id: 2, description:"Termo", link:"/term", icon: "term.svg"},
  { id: 3, description:"Referências", link:"/references", icon: "references.svg"}
]

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itensMenu.map((item : DataProps) => (
      <MenuItem item={item} key={item.id} />
    ))}
  </motion.ul>
);
