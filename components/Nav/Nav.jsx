import React, { useState, useCallback } from "react";
import Link from "next/link";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styles from "./Nav.module.css";
import { GitHub } from "@material-ui/icons";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerFrame}>
        <Link href="https://github.com/Horieryuhei0421/horie-portfolio">
          <a target="_blank">
            <button className={styles.navObject}>
              <GitHub />
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
