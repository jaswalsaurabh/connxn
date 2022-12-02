import React, { useState } from "react";
import AddConnection from "./components/AddConnection";
import AddPeople from "./components/AddPeople";
import SimpleModal from "./components/ModalComp";
import Navbar from "./components/Navbar";
import useTraverse from "./hooks/useTraverse";

const App = () => {
  const { addUser, users,myConnxn } = useTraverse();

  function onCreate(value) {
    addUser(users, value);
  }

  return (
    <div>
      <Navbar />
      <div className="section" >
      <AddPeople onCreate={onCreate} />
      <AddConnection users={users} />
      <AddConnection users={users} from="find" />
      </div>
    </div>
  );
};

export default App;
