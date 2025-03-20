import React from "react";

const UsersList = ({user}) => {
  return (
    <div>
      <p>Id:</p>
      <span>{user.id} </span>
      <p>username:</p>
      <span>{user.username} </span>
      <p>Email:</p>
      <span>{user.email} </span>
    </div>
  );
};

export { UsersList };
