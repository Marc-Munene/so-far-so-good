import { useEffect, useState } from "react";
import { UserCard } from "./components/UserCard";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responce = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        
        if (!responce.ok) throw new Error("Failed to fetch users!");

        const json = await responce.json();

        setData(json);
        // console.log(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-row flex-wrap items-center justify-center min-h-screen bg-gray-200 gap-3">
      {data.map((users) => (
        <UserCard users={users} key={users.id} />
      ))}
    </div>
  );
};

export { App };
