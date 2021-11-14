import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
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

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        anchor="top"
        open={props.open}
        onClose={(e) => props.onClose(e)}
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
            <div className={styles.nemuFlex}>
              <Link href="/">
                <button className={styles.objectAline}>HOME</button>
              </Link>
              <Link href="/pages/profile">
                <button className={styles.objectAline}>PERSON</button>
              </Link>
            </div>
            <div className={styles.nemuFlex}>
              <Link href="/pages/projects">
                <button className={styles.objectAline}>PROJECTS</button>
              </Link>
              <Link href="/pages/link">
                <buuton className={styles.objectAline}>LINK</buuton>
              </Link>
            </div>
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default ClosableDrawer;
