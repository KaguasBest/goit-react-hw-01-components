import {
  StatisticsSection,
  StatsItem,
  StatsLabel,
  StatsList,
  StatsPer,
  StatsTitle,
  randomColor,
} from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <StatisticsSection>
      <StatsTitle>Upload stats</StatsTitle>

      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id} style={{ backgroundColor: randomColor() }}>
              <StatsLabel>{label}</StatsLabel>
              <StatsPer>{percentage}</StatsPer>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatisticsSection>
  );
};
