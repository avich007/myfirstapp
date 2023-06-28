import React, { useState } from "react";
import "./UserComp.css";
import { Button, Avatar } from "@mui/material";
import UserModal from "../modal/UserModal";

const UserComp = (props) => {
  const { userData } = props;

  let { id, username, email } = userData;

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="usercompcontainer">
      <Avatar sx={{ bgcolor: "orange" }}>{username.charAt(0)}</Avatar>
      <div style={{ textAlign: "center" }}>
        <h3>{username}</h3>
        <p>{email}</p>
      </div>
      <Button
        variant="contained"
        size="small"
        sx={{ width: "10px", fontSize: "8px" }}
        onClick={() => setModalOpen(true)}
      >
        Show Details
      </Button>
      <UserModal
        key={id}
        isOpen={modalOpen}
        modalHandler={setModalOpen}
        children={userData}
      />
    </div>
  );
};

export default UserComp;
