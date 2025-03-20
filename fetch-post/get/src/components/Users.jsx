const Users = ({ users }) => {
  const BoldText = ({ children }) => {
    return <p className="font-bold">{children}</p>;
  };
  return (
    <div className="flex flex-col items-center mb-3">
      <div className="flex ">
        <BoldText>ID:</BoldText>
        <span>{users.id} </span>
      </div>
      <div className="flex">
        <BoldText>Name:</BoldText>
        <span>{users.name} </span>
      </div>
      <div className="flex">
        <BoldText>Username:</BoldText>
        <span>{users.username}</span>
      </div>
      <div className="flex">
        <BoldText>Email:</BoldText>
        <span>{users.email} </span>
      </div>
    </div>
  );
};

export { Users };
