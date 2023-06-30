import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const UserModal = (props) => {
  const { isOpen, modalHandler, children } = props;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => modalHandler(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1>{children.username}</h1>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Email: {children.email}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Phone: {children.phone}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Address:{" "}
          {`${children.address.suite}, ${children.address.street}, ${children.address.city} - ${children.address.zipcode}`}
        </Typography>
      </Box>
    </Modal>
  );
};

export default UserModal;
