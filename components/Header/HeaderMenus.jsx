import React, { useEffect } from "react";
import { IconButton, Badge } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const HeaderMenus = (props) => {
  return (
    <>
      <IconButton onClick={(event) => props.handleDrawerToggle(event)}>
        <Menu />
      </IconButton>
    </>
  );
};

export default HeaderMenus;
