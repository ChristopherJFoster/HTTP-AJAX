import React from "react";
import styled from "styled-components";

const FriendDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 1%;
  padding: 10px 10px 0 10px;
  flex: 1 1 43%;
  background: #ccffef;
`;

const FriendHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3em;
  background: #66ffcc;
  color: teal;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ControlsDiv = styled.div`
  display: flex;
`;

const EditButton = styled.button`
  font-size: 0.3em;
  font-weight: bold;
  margin-left: 10px;
  padding: 5px 7px 4px 7px;
  background: #00b3b3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const IconDiv = styled.div`
  font-size: 0.5em;
  margin-left: 14px;
  color: red;
  cursor: pointer;
`;

const FriendDataDiv = styled.div`
  padding: 10px 0 10px 5px;
  line-height: 1.2;
  color: teal;
  h4 {
    font-weight: bold;
  }
`;

export const Friend = ({ friend, editFriend, deleteFriend, history }) => {
  return (
    <FriendDiv>
      <FriendHeaderDiv>
        <h2>{friend.name}</h2>
        <ControlsDiv>
          <EditButton onClick={() => editFriend(friend.id, history)}>
            Edit Friend
          </EditButton>
          <IconDiv>
            <i
              onClick={() => deleteFriend(friend.id)}
              className="fas fa-user-times"
            />
          </IconDiv>
        </ControlsDiv>
      </FriendHeaderDiv>
      <FriendDataDiv>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
        <p>Color: {friend.color}</p>
        <p>Favorite Food: {friend.favefood}</p>
        <h4>"{friend.quotation}"</h4>
      </FriendDataDiv>
    </FriendDiv>
  );
};
