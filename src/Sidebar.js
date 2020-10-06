import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./Sidebar.css";
import SidebrOption from "./SidebrOption";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2></h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </div>
        <Create />
      </div>
      <SidebrOption Icon={InsertComment} title="Threads" />
      <SidebrOption Icon={Inbox} title="Mentions and reactions" />
      <SidebrOption Icon={Drafts} title="Saved items" />
      <SidebrOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebrOption Icon={PeopleAlt} title="People and user groups" />
      <SidebrOption Icon={Apps} title="Apps" />
      <SidebrOption Icon={FileCopy} title="File browser" />
      <SidebrOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebrOption Icon={ExpandLess} title="Channels" />
      <hr />
      <SidebrOption Icon={Add} addChannelOption title="Add channel" />
      {/*  */}
      {channels.map((channel) => (
        <SidebrOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
