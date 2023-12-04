import {
  Description,
  Label,
  Location,
  Name,
  ProfileCard,
  ProfileImg,
  Quantity,
  StatsItem,
  StatsList,
  Tag,
  TaskCard,
} from './Profile.styled';

export const Profile = ({ username, location, avatar, tag, stats }) => {
  return (
    <TaskCard>
      <ProfileCard>
        <Description>
          <ProfileImg src={avatar} alt={username} />
          <Name>{username}</Name>
          <Tag>{tag}</Tag>
          <Location>{location}</Location>
        </Description>

        <StatsList>
          <StatsItem>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </StatsItem>
        </StatsList>
      </ProfileCard>
    </TaskCard>
  );
};
