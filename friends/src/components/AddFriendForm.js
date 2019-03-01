import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled.form`
  margin-top: 1%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 1% 0;
`;

const StyledInput = styled.input`
  width: 50%;
  font-size: 1.2em;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  padding: 2px 0 2px 5px;
`;

const SubmitFriendButton = styled.button`
  font-size: 1.3em;
  font-weight: bold;
  width: 240px;
  margin: 10px;
  padding: 5px 7px 4px 7px;
  background: #39e600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FriendsListButton = styled.button`
  font-size: 1.3em;
  font-weight: bold;
  width: 240px;
  margin: 10px;
  padding: 5px 7px 4px 7px;
  background: #1affb2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const AddFriendForm = ({
  potentialFriendChanges,
  handleChanges,
  submitFriend,
  history
}) => {
  return (
    <StyledForm onSubmit={e => submitFriend(e, history)}>
      <StyledInput
        required
        type="text"
        value={potentialFriendChanges.name}
        name="name"
        onChange={handleChanges}
        placeholder="name"
      />
      <StyledInput
        type="number"
        value={potentialFriendChanges.age}
        name="age"
        onChange={handleChanges}
        placeholder="age (shh...)"
      />
      <StyledInput
        type="text"
        value={potentialFriendChanges.email}
        name="email"
        onChange={handleChanges}
        placeholder="email address"
      />
      <StyledInput
        type="text"
        value={potentialFriendChanges.color}
        name="color"
        onChange={handleChanges}
        placeholder="color"
      />
      <StyledInput
        type="text"
        value={potentialFriendChanges.favefood}
        name="favefood"
        onChange={handleChanges}
        placeholder="favorite food"
      />
      <StyledInput
        type="text"
        value={potentialFriendChanges.quotation}
        name="quotation"
        onChange={handleChanges}
        placeholder="quotation"
      />
      <SubmitFriendButton type="submit">Add Friend</SubmitFriendButton>
      <Link to="/friendslist">
        <FriendsListButton>Back to List of Friends</FriendsListButton>
      </Link>
    </StyledForm>
  );
};
