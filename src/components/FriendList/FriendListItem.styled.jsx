import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 0 -2px 5px 2px #afaeae;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px 20px;
  background: #fff;
  transition: transform ease-in-out 0.3s, background ease-in-out 0.3s;
  &:hover {
    background: #d9d8d8;
    transform: scale(1.02);
  }
`;

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 50%;
  background: tomato;
`;

export const FriendImg = styled.img`
  width: 40px;
  height: auto;
  border-radius: 3px;
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-size: 16px;
`;
