import React from "react";
import { Link } from "react-router-dom";

export const EditFriendForm = ({
  potentialFriendChanges,
  handleChanges,
  submitFriendEdits
}) => {
  return (
    <form onSubmit={submitFriendEdits}>
      <input
        required
        type="text"
        value={potentialFriendChanges.name}
        name="name"
        onChange={handleChanges}
        placeholder="name"
      />
      <input
        type="number"
        value={potentialFriendChanges.age}
        name="age"
        onChange={handleChanges}
        placeholder="age (shh...)"
      />
      <input
        type="text"
        value={potentialFriendChanges.email}
        name="email"
        onChange={handleChanges}
        placeholder="email address"
      />
      <input
        type="text"
        value={potentialFriendChanges.color}
        name="color"
        onChange={handleChanges}
        placeholder="color"
      />
      <input
        type="text"
        value={potentialFriendChanges.favefood}
        name="favefood"
        onChange={handleChanges}
        placeholder="favorite food"
      />
      <input
        type="text"
        value={potentialFriendChanges.quotation}
        name="quotation"
        onChange={handleChanges}
        placeholder="quotation"
      />
      <button className="edit-friend" type="submit">
        Submit Friend Edits
      </button>
      <Link to="/friendslist">Back to List of Friends</Link>
    </form>
  );
};
