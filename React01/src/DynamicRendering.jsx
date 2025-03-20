import React from "react";
import { UsersList } from "./components/UsersList";

const DynamicRendering = () => {
  const users = [
    {
      id: 1,
      username: "Marc Munene",
      email: "marcmunene@gmail.com",
    },
    {
      id: 2,
      username: "Esther Njeri",
      email: "esther@gmail.com",
    },
  ];

  return (
    <div>
      {users.map((user) => {
        return <UsersList user={user} key={user.id} />;
      })}
    </div>
  );
};

export { DynamicRendering };
