import React from "react";
import { Link } from "react-router-dom";

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
        placeholder="name"
      />
      <input
        type="number"
        value={potentialNewFriend.age}
        name="age"
        onChange={handleChanges}
        placeholder="age (shh...)"
      />
      <input
        type="text"
        value={potentialNewFriend.email}
        name="email"
        onChange={handleChanges}
        placeholder="email address"
      />
      <input
        type="text"
        value={potentialNewFriend.color}
        name="color"
        onChange={handleChanges}
        placeholder="color"
      />
      <input
        type="text"
        value={potentialNewFriend.favefood}
        name="favefood"
        onChange={handleChanges}
        placeholder="favorite food"
      />
      <input
        type="text"
        value={potentialNewFriend.quotation}
        name="quotation"
        onChange={handleChanges}
        placeholder="quotation"
      />
      <button className="add-new-friend" type="submit">
        Add New Friend
      </button>
      <Link to="/friendslist">Back to List of Friends</Link>
    </form>
  );
};
