import { Container } from 'components/Container/Container.styled';
import { Title } from 'components/Title/Title.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

import 'index.css';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import { FriendList } from 'components/FriendList/FriendList';

export const App = () => {
  return (
    <Container>
      <Title>Task 1</Title>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Title>Task 2</Title>
      <Statistics stats={data}></Statistics>

      <Title>Task 3</Title>
      <FriendList friends={friends}></FriendList>

      <Title>Task 4</Title>
    </Container>
  );
};
