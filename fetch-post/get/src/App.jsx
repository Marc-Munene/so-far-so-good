import { useEffect, useState } from "react";
import { Users } from "./components/Users";

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
    <div className="flex flex-row flex-wrap gap-4 items-center justify-center min-h-screen">
      {data.map((users) => {
        return (
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mb-4 hover:shadow-xl transition-shadow duration-300 ">
            <Users users={users} key={users.id} />
          </div>
        );
      })}
    </div>
  );
};

export { App };
