import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const AddPeople = ({ onCreate, handleSnackbarOpen }) => {
  const [name, setName] = useState("");

  function handleClick() {
    if (name.length > 0) {
      setName("");
      onCreate(name);
      handleSnackbarOpen("user created successfully", "successDark");
    }
  }

  return (
    <div className="addPeople">
      <h2>Add People</h2>
      <TextField
        className="input"
        variant={"outlined"}
        autoFocus
        color="primary"
        type={"text"}
        size="small"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="person's name.."
      />
      <Button
        variant={"contained"}
        color={"primary"}
        className="button"
        onClick={handleClick}
      >
        Submit
      </Button>
    </div>
  );
};

export default AddPeople;
