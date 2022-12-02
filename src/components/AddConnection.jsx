import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  Select,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useTraverse from "../hooks/useTraverse";
import SimpleModal from "./ModalComp";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddConnection = ({ users, from, handleSnackbarOpen, userObj }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const { handleConnection, getConxn, myConnxn } = useTraverse();
  const [input, setInput] = useState({
    source: users[0]?.name || "",
    target: users[1]?.name || "",
  });

  // console.log("users", users);
  // console.log("input", input);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  // console.log("userobj conxn page", userObj);

  async function handleSubmit() {
    let temp = users,
      sourceId,
      targetId;
    temp.forEach((item) => {
      if (item.name === input.source) {
        sourceId = item.id;
      }
      if (item.name === input.target) {
        targetId = item.id;
      }
    });
    if (from) {
      let a = [];
      let b = new Set([]);
      if (sourceId === targetId) {
        handleSnackbarOpen("source and target cannot be same", "errorDark");
      } else {
        getConxn(sourceId, targetId, a, b);
      }
    } else {
      if (sourceId === targetId) {
        handleSnackbarOpen("source and target cannot be same", "errorDark");
      } else {
        handleSnackbarOpen("connection added ", "successDark");
        handleConnection(users, sourceId, targetId);
      }
    }
  }

  useEffect(() => {
    let temp = [...myConnxn];
    if (typeof temp[0] === "string") {
      handleSnackbarOpen("no connection found", "errorDark");
    } else if (myConnxn.size > 0 && typeof temp[0] !== "string") {
      setOpen(true);
    }
  }, [myConnxn]);

  return (
    <div className="connections">
      <h2>{from ? "Find Connection" : "Add Connection"}</h2>
      <SimpleModal
        data={myConnxn}
        userObj={userObj}
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
      />
      {users.length > 0 ? (
        <div className="form__div">
          <FormControl className={classes.formControl}>
            <InputLabel>Source</InputLabel>
            <Select
              variant={"standard"}
              native
              name="source"
              value={input.source}
              onChange={handleChange}
            >
              {users.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Target</InputLabel>
            <Select
              variant={"standard"}
              native
              name="target"
              value={input.target}
              onChange={handleChange}
            >
              {users.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button
            variant={"contained"}
            color={"secondary"}
            onClick={handleSubmit}
          >
            {from ? "Get" : "Submit"}
          </Button>
        </div>
      ) : (
        <p>There are no users right now</p>
      )}
    </div>
  );
};

export default AddConnection;
