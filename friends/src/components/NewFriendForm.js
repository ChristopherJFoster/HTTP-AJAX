import React from "react";

export const NewFriendForm = ({
  potentialNewFriend,
  handleChanges,
  addNewFriend
}) => {
  return (
    <form onSubmit={addNewFriend}>
      <input
        type="text"
        value={potentialNewFriend.name}
        name="name"
        onChange={handleChanges}
        placeholder="Name"
      />
      <button className="add-task" type="submit">
        Add New Friend
      </button>
    </form>
  );
};
