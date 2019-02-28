import React from "react";
import styled from "styled-components";
import { Friend } from "./Friend";

const FriendsListHeaderDiv = styled.div`
  border-radius: 5px;
  background: tomato;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: teal;
  h1 {
    font-size: 3em;
  }
`;

const AddButton = styled.button`
  font-size: 1.5em;
  font-weight: bold;
  height: 30px;
  margin-bottom: 7px;
  padding: 7px;
  background: #6699ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FriendsListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const FriendsList = ({
  friends,
  addFriend,
  editFriend,
  deleteFriend,
  history
}) => {
  return (
    <>
      <FriendsListHeaderDiv>
        <h1>My List of Friends</h1>
        <AddButton onClick={() => addFriend(history)}>Add a Friend</AddButton>
      </FriendsListHeaderDiv>
      <FriendsListDiv>
        {friends.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
            editFriend={editFriend}
            deleteFriend={deleteFriend}
            history={history}
          />
        ))}
      </FriendsListDiv>
    </>
  );
};
