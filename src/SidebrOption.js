import React from "react";
import "./SidebrOption.css";
import { useHistory } from "react-router-dom";
import db from "./firebase";

function SidebrOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="sideBarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebaroption__channel">
          <span className="sideBarOption__hash"># {title}</span>
        </h3>
      )}
    </div>
  );
}

export default SidebrOption;
