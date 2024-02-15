// src/components/DropdownMenu/DropdownMenu.js
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./styles/DropdownMenu.module.css";
import { Link } from "react-router-dom";

const DropdownMenu = ({ name, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Configuração da animação com react-spring
  const animationProps = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateX(0)` : `translateX(-20px)`,
    display: isOpen ? "block" : "none",
  });

  return (
    <div className={styles.dropdown}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
        {name}
      </button>
      <animated.div style={animationProps} className={styles.dropdownContent}>
        {options.map((option, index) => (
          <Link
            key={index}
            to={option.to}
            onClick={option.action}
            className={styles.dropdownItem}
          >
            {option.name}
          </Link>
        ))}
      </animated.div>
    </div>
  );
};

export default DropdownMenu;
