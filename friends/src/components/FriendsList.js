import React from "react";
import { Friend } from "./Friend";

export const FriendsList = ({
  friends,
  addFriend,
  editFriend,
  deleteFriend,
  history
}) => {
  return (
    <div className="friends-list">
      <button onClick={() => addFriend(history)}>Add a Friend</button>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          friend={friend}
          editFriend={editFriend}
          deleteFriend={deleteFriend}
          history={history}
        />
      ))}
    </div>
  );
};
