import {
  FriendItem,
  FriendStatus,
  FriendImg,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItem key={id}>
            <FriendStatus
              style={{ background: isOnline ? '#b33131' : '#24b552' }}
            ></FriendStatus>
            <FriendImg src={avatar} alt={name} width={48} />
            <FriendName>{name}</FriendName>
          </FriendItem>
        );
      })}
    </>
  );
};
