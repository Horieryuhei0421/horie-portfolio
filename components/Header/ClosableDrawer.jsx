import React, { useCallback, useEffect, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { AddCircle, History, Person, ExitToApp } from "@material-ui/icons";

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
  searchField: {
    alignItems: "center",
    display: "flex",
    marginLeft: 32,
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
      label: "ホーム",
      id: "home",
      value: "/adviserpage",
    },
    {
      func: selectMenu,
      label: "通知",
      id: "notice",
      value: "/notice",
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
            {menus.map((menu) => (
              <ListItem
                button
                key={menu.id}
                onClick={(e) => menu.func(e, menu.value)}
              >
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default ClosableDrawer;
