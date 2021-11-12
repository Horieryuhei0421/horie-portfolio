import React, { FC, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import styles from "./Header.module.css";


// 戻り値がvoid関数のpropsの型（VoidFunction時のエラー未解決）
type Props = {
  handleDrawerToggle: any
}

export default function HeaderMenus({ handleDrawerToggle }: Props) {
  return (
    <>
      <button
        className={styles.iconBox}
        onClick={(event) => handleDrawerToggle(event)}
      >
        <Menu />
      </button>
    </>
  );
};





