import { Avatar } from "@material-ui/core";
import React from "react";
import "./Header.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import { HelpOutline } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        ></Avatar>
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input type="text" placeholder="Search Clever Programmer" />
      </div>
      <div className="header_right">
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
