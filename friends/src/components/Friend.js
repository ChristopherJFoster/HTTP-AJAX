import React from "react";

export const Friend = ({ friend }) => {
  return (
    <div>
      <p>{friend.name}</p>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
    </div>
  );
};
