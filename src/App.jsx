import React, { useState } from "react";
import AddConnection from "./components/AddConnection";
import AddPeople from "./components/AddPeople";
import SimpleModal from "./components/ModalComp";
import Navbar from "./components/Navbar";
import useTraverse from "./hooks/useTraverse";

const App = () => {
  const { addUser, users } = useTraverse();

  function onCreate(value) {
    addUser(users, value);
  }



  console.log("users>>", users);

  return (
    <div>
      <Navbar />
      <div className="section" >
      <AddPeople onCreate={onCreate} />
      <AddConnection users={users} />
      <AddConnection users={users} from="find" />
      <SimpleModal/>
      </div>
    </div>
  );
};

export default App;
