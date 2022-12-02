import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

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
    width: "auto",
    minWidth: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ data, open, handleClose, userObj }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  let mapData = [...data];
  mapData = mapData.filter((item) => typeof item !== "string");
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4 className="modalHeading">Available Connections</h4>
      {mapData.map((item, ind) => (
        <div key={ind}>
          <p className="modalSub">Connection {ind + 1}</p>
          <div className="renderDiv">
            {typeof item !== "string" &&
              item?.map((key, index) => (
                <p key={index} className="suggestion">
                  {userObj[key]}{" "}
                  {index < item.length - 1 && (
                    <span>
                      <PersonAddIcon />
                    </span>
                  )}{" "}
                </p>
              ))}
          </div>
        </div>
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
