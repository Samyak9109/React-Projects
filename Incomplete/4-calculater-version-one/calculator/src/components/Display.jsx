import React from "react";

import styles from "./Display.module.css";

const Display = ({ calval }) => {
  return (
    <div>
      <input type="text" className={styles.display} value={calval} readOnly />
    </div>
    
  );
};

export default Display;
