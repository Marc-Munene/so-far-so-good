import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responce = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await responce.json();

        setData(json);
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {data.map((users) => {
        return (
          <div>
            <p>ID:</p>
            <span>{users.id} </span>
            <p>Name:</p>
            <span>{users.name} </span>
            <p>Username:</p>
            <span>{users.username}</span>
            <p>Email:</p>
            <span>{users.email} </span>
          </div>
        );
      })}
    </div>
  );
};

export { App };
