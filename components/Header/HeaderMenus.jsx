import React, { useEffect } from "react";
import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import styles from "./Header.module.css";

const HeaderMenus = (props) => {
  return (
    <>
      <button
        className={styles.iconBox}
        onClick={(event) => props.handleDrawerToggle(event)}
      >
        <Menu />
      </button>
    </>
  );
};

export default HeaderMenus;
