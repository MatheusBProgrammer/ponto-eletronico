import React from "react";
import styles from "./styles/Button.module.css";
function Button({ name, execFunc }) {
  const onClick = (e) => {
    e.preventDefault();
    execFunc();
  };
  return (
    <div className={styles.button}>
      <button onClick={onClick}>{name}</button>
    </div>
  );
}

export default Button;
