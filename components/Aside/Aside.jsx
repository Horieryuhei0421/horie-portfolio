import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import styles from "./Aside.module.css";

const Aside = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerFrame}>
        <button className={styles.asideObject}>HOME</button>
        <button className={styles.asideObject}>PERSON</button>
        <button className={styles.asideObject}>PROJECTS</button>
        <button className={styles.asideObject}>LINK</button>
      </div>
    </div>
  );
};

export default Aside;
