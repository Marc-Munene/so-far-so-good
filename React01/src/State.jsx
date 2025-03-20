import { useState } from "react";
import { UserDetails } from "./components/UserDetails";
import { UserForm } from "./components/UserForm";

const State = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Marc",
      email: "marc@gmail.com",
    },
    {
      id: 2,
      username: "Munene",
      email: "munene@gmail.com",
    },
  ]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <UserForm setUsers={setUsers} />

      <div className="w-full flex flex-col items-center shadow shadow-black p-4">
        {users.map((user) => (
          <UserDetails user={user} key={user.id} setUsers={setUsers} />
        ))}
      </div>
    </div>
  );
};

export { State };
