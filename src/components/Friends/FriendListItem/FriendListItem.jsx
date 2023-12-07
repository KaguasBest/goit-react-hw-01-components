import {
  FriendItem,
  FriendStatus,
  FriendImg,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus
        style={{ background: isOnline ? '#b33131' : '#24b552' }}
      ></FriendStatus>
      <FriendImg src={avatar} alt={name} width={48} />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
