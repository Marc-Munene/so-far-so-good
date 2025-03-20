import React from "react";

const LabelValue = ({ label, value }) => {
  return (
    <div className="flex">
      <p className="font-bold mr-2">{label}</p>
      <span>{value}</span>
    </div>
  );
};

export  {LabelValue};
