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
        // console.log(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-row flex-wrap items-center justify-center min-h-screen w-full gap-3">
      {data.map((users) => (
        <div
          key={users.id}
          className="flex flex-col items-center w-96 mt-5 shadow shadow-black p-4 "
        >
          <div className="flex">
            <p>ID:</p>
            <span>{users.id} </span>
          </div>

          <div className="flex">
            <p>NAME:</p>
            <span>{users.name} </span>
          </div>

          <div className="flex">
            <p>USERNAME:</p>
            <span>{users.username} </span>
          </div>

          <div className="flex">
            <p>EMAIL:</p>
            <span>{users.email} </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export { App };
