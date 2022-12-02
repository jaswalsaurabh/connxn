import React, { useState } from "react";
import AddConnection from "./components/AddConnection";
import AddPeople from "./components/AddPeople";
import Navbar from "./components/Navbar";
import OpenSnackbar from "./components/SnackBarComp";
import useTraverse from "./hooks/useTraverse";

const App = () => {
  const { addUser, users,userObj } = useTraverse();

  const [snackbarDetails, setSnackbarDetails] = useState({
    message: "",
    type: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarOpen = (message, type) => {
    let obj = {
      message,
      type,
    };
    setSnackbarDetails(obj);
    setSnackbarOpen(true);
  };

  function onCreate(value) {
    addUser(users, value);
  }

  // console.log("details", snackbarDetails);
  // console.log("app userobj",userObj);

  return (
    <div>
      <Navbar />
      <div className="section">
        <AddPeople
          onCreate={onCreate}
          handleSnackbarOpen={handleSnackbarOpen}
        />
        <AddConnection users={users} handleSnackbarOpen={handleSnackbarOpen} />
        <AddConnection
          users={users}
          handleSnackbarOpen={handleSnackbarOpen}
          from="find"
          userObj={userObj}
        />
      </div>
      {snackbarOpen && (
        <OpenSnackbar
          message={snackbarDetails.message}
          type={snackbarDetails.type}
          open={snackbarOpen}
          setOpen={setSnackbarOpen}
          vertical="bottom"
          horizontal="center"
        />
      )}
    </div>
  );
};

export default App;
