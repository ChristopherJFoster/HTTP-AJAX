import React from "react";
import { Friend } from "./Friend";
import { Link } from "react-router-dom";

export const FriendsList = ({ friends }) => {
  return (
    <div className="friends-list">
      <Link to="/newfriendform">Add a New Friend</Link>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};
