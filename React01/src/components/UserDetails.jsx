import React, { useState } from "react";

const UserDetails = ({ user, setUsers }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  console.log(isEditing);

  return (
    <div className="border border-solid w-4xl flex flex-col items-center p-4">
      <div>
        <button
          className="border-solid p-2 border-2 mr-2 bg-blue-700 text-white"
          onClick={() => setIsEditing((currentState) => !currentState)}
        >
          Edit
        </button>
        {isEditing && (
          <button
            className="border-solid p-2 border-2 mr-2 bg-green-700 text-white"
            onClick={() => {
              setUsers((currentUserState) =>
                currentUserState.map((currentUser) =>
                  currentUser.id === user.id
                    ? { ...currentUser, username, email }
                    : currentUser
                )
              );
              //exit editing mode
              setIsEditing(false);
            }}
          >
            Save
          </button>
        )}
        <button
          className="border-solid p-2 border-2 bg-red-700 text-white"
          onClick={() =>
            setUsers((currentUserState) =>
              currentUserState.filter(
                (currentUser) => currentUser.id !== user.id
              )
            )
          }
        >
          Delete
        </button>
      </div>

      <div>
        {/* ID */}
        <div>
          <b>ID:</b> <span>{user.id}</span>
        </div>

        {/* USERNAME */}
        <div>
          <b>Username:</b>
          {isEditing ? (
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-2 rounded ml-2 border-solid "
            />
          ) : (
            <span>{user.username} </span>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <b>Email:</b>
          {isEditing ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded ml-2 border-solid "
            />
          ) : (
            <span>{user.email} </span>
          )}
        </div>
      </div>
    </div>
  );
};

export { UserDetails };
