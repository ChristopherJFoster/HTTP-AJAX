import React from "react";
import styled from "styled-components";
import { Friend } from "./Friend";

const FriendsListDiv = styled.div`
  padding: 1% 1% 2% 1%;
  margin: 1%;
`;

const FriendsListHeaderDiv = styled.div`
  border-radius: 5px;
  background: aquamarine;
  width: 98%;
  padding: 2% 0;
  margin: 2% auto 1% auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: teal;
  h1 {
    font-size: 3em;
    font-weight: bold;
  }
`;

const AddButton = styled.button`
  font-size: 1.2em;
  font-weight: bold;
  height: 30px;
  margin: 0 0 7px 20px;
  padding: 2px 10px 0 10px;
  background: #39e600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FriendsListContentDiv = styled.div`
  width: 100%;
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
    <FriendsListDiv>
      <FriendsListHeaderDiv>
        <h1>My List of Friends</h1>
        <AddButton onClick={() => addFriend(history)}>Add Friend</AddButton>
      </FriendsListHeaderDiv>
      <FriendsListContentDiv>
        {friends.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
            editFriend={editFriend}
            deleteFriend={deleteFriend}
            history={history}
          />
        ))}
      </FriendsListContentDiv>
    </FriendsListDiv>
  );
};
