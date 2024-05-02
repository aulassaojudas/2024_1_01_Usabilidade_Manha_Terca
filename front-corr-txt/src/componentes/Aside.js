import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import menuLinks from "../jsondata/menuLinks.json"

function Aside() {
  return (
    <div>
      <nav>
      <List>
          {menuLinks.map(link => (
            <ListItem key={link.path} disablePadding>
              <ListItemButton component={Link} to={link.path}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </div>
  );
}

export default Aside;
