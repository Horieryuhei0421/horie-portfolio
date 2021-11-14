import React, { useState, useCallback } from "react";
import Link from "next/link";

import { makeStyles } from "@material-ui/styles";
import styles from "./Aside.module.css";

const Aside = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerFrame}>
        <Link href="/">
          <button className={styles.asideObject}>HOME</button>
        </Link>
        <Link href="/pages/profile">
          <button className={styles.asideObject}>PERSON</button>
        </Link>
        <Link href="/pages/projects">
          <button className={styles.asideObject}>PROJECTS</button>
        </Link>
        <Link href="/pages/link">
          <button className={styles.asideObject}>LINK</button>
        </Link>
      </div>
    </div>
  );
};

export default Aside;
