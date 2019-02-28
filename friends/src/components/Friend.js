import React from "react";

export const Friend = ({ friend, editFriend, deleteFriend, history }) => {
  return (
    <div>
      <div className="friend-header">
        <h2>{friend.name}</h2>
        <button onClick={() => editFriend(friend.id, history)}>
          Edit Friend
        </button>
        <i
          onClick={() => deleteFriend(friend.id)}
          className="fas fa-user-times"
        />
      </div>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
      <p>Color: {friend.color}</p>
      <p>Favorite Food: {friend.favefood}</p>
      <h4>"{friend.quotation}"</h4>
    </div>
  );
};
