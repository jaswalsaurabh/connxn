import React from "react";

const UsersComp = ({ users, userObj }) => {
  return (
    <div className="usersDiv" >
      <h2>Current Users</h2>
      {users.map((item, index) => (
        <div key={index} className="listUser">
          <p>{item.name} </p> is friends with [{" "}
          {item.connections.map((key, index) => (
            <p key={index} > {userObj[key]} </p>
          ))}
          ]
        </div>
      ))}
    </div>
  );
};

export default UsersComp;
