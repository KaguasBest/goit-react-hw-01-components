import { FriendsList } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      <FriendListItem friends={friends}></FriendListItem>
    </FriendsList>
  );
};
