import React, { useCallback, useEffect, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { push } from "connected-react-router";
import styles from "./Header.module.css";

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: 256,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 256,
  },
  objectAline: {
    textAlign: "center",
  },
}));

const ClosableDrawer = (props) => {
  const classes = useStyles();
  const { container } = props;

  const selectMenu = (event, path) => {
    dispatch(push(path));
    props.onClose(event);
  };

  const menus = [
    {
      func: selectMenu,
      label: "HOME",
      id: "home",
      value: "/",
    },
    {
      func: selectMenu,
      label: "PROFILE",
      id: "profile",
      value: "/posts/firstpost",
    },
  ];

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        anchor="top"
        open={props.open}
        onClose={(e) => props.onClose(e)}
        // classes={{ paper: classes.drawerPaper }}
        ModalProps={{ keepMounted: true }}
        className={classes.bg}
      >
        <div
          onClose={(e) => {
            props.onClose(e);
          }}
          onKeyDown={(e) => {
            props.onClose(e);
          }}
        >
          <List>
            {/* {menus.map((menu) => (
              <ListItem
                button
                key={menu.id}
                onClick={(e) => menu.func(e, menu.value)}
              >
                <ListItemText primary={menu.label} />
              </ListItem>
            ))} */}
            <div className={styles.nemuFlex}>
              <div className={styles.objectAline}>HOME</div>
              <div className={styles.objectAline}>PERSON</div>
            </div>
            <div className={styles.nemuFlex}>
              <div className={styles.objectAline}>PROJECTS</div>
              <div className={styles.objectAline}>LINK</div>
            </div>
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default ClosableDrawer;
