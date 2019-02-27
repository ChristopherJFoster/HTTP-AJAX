import React from "react";
import { Friend } from "./Friend";

export const FriendsList = ({ friends, addNewFriend }) => {
  return (
    <div className="friends-list">
      <button onClick={addNewFriend}>Add New Friend</button>
      {friends.map(friend => (
        <Friend friend={friend} />
      ))}
    </div>
  );
};
