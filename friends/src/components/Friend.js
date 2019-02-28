import React from "react";

export const Friend = ({ friend }) => {
  return (
    <div>
      <h2>{friend.name}</h2>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
      <p>Color: {friend.color}</p>
      <p>Favorite Food: {friend.favefood}</p>
      <h4>"{friend.quotation}"</h4>
    </div>
  );
};
