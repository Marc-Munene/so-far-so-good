import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const UserForm = ({ setUsers }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !email.trim()) {
      toast.error("Username and email cannot be empty!");
      return;
    }
    const newUser = {
      id: counter,
      username,
      email,
    };
    setCounter((counter) => counter + 1);
    setUsers((currentUser) => [...currentUser, newUser]);

    toast.success("New user created");

    //clears out the form after adding
    setUsername("");
    setEmail("");
  };
  return (
    <div>
      <form
        className="border border-solid w-96 rounded p-8 mb-8 shadow shadow-black "
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex items-center">
          <label htmlFor="username" className="font-bold w-24">
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            className="border p-2 rounded ml-2 border-solid flex-1"
          />
        </div> 
        <div className="mb-4 flex items-center">
          <label htmlFor="email" className="font-bold w-24">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded ml-2 border-solid flex-1 "
          />
        </div>
        <div className="flex justify-center mt-5">
          <button className="border-solid p-2 border-2 mt-2 bg-green-700 text-white">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export { UserForm };
