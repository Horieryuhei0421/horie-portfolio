import React, { useState, useCallback } from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerFrame}>
        <button>○</button>
      </div>
    </div>
  );
};

export default Nav;
