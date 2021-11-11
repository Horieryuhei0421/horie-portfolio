import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import HeaderMenus from "./HeaderMenus";
import ClosableDrawer from "./ClosableDrawer";
import styles from "./Header.module.css";

const useStyles = makeStyles((Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "#e7eaf0",
    color: "#444",
  },
  toolbar: {
    margin: "0 auto",
    maxWidth: 1400,
    width: "100%",
  },
  iconButtons: {
    margin: "0 0 0 auto",
  },
}));

const Header = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const selector = useSelector((state) => state);

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = useCallback(
    (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setOpen(!open);
    },
    [setOpen, open]
  );

  return (
    <div className={styles.headerRoot}>
      <div classes={classes.root}>
        <AppBar position="fixed" className={classes.menuBar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.iconButtons}>
              <HeaderMenus handleDrawerToggle={handleDrawerToggle} />
            </div>
          </Toolbar>
        </AppBar>
        <ClosableDrawer open={open} onClose={handleDrawerToggle} />
      </div>
    </div>
  );
};

export default Header;
