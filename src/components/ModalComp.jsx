import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import useTraverse from "../hooks/useTraverse";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ data, open, handleOpen, handleClose }) {
  const { myConnxn, userObj } = useTraverse();
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const mapData = [...data];

  console.log("nas>> new obj ", mapData);
  console.log("nas>> userobj obj ", userObj);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4>Available Connections</h4>
      {mapData.map((item, index) => (
        <>
          <p>{index + 1}</p>
          {item.map((key) => (
            <p>{userObj[key]}</p>
          ))}
        </>
      ))}
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
