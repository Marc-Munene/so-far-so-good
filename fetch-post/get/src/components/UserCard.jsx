const UserCard = ({ users }) => {
  return (
    <div className="flex flex-col items-center bg-white w-96 mt-5 p-6 rounded shadow-lg hover:shadow-2xl transition-shadow duration-100  mb-2">
      <div className="flex ">
        <p className="font-bold mr-2">ID:</p>
        <span>{users.id} </span>
      </div>

      <div className="flex">
        <p className="font-bold mr-2">NAME:</p>
        <span>{users.name} </span>
      </div>

      <div className="flex">
        <p className="font-bold mr-2">USERNAME:</p>
        <span>{users.username} </span>
      </div>

      <div className="flex">
        <p className="font-bold mr-2">EMAIL:</p>
        <span>{users.email} </span>
      </div>
    </div>
  );
};

export { UserCard };
