import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import styles from "./Aside.module.css";

const Aside = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerFrame}>
        <button>○</button>
      </div>
    </div>
  );
};

export default Aside;
