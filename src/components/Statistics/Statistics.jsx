import { randomColor } from 'helpers/randomColor';
import {
  StatisticsSection,
  StatsItem,
  StatsLabel,
  StatsList,
  StatsPer,
  StatsTitle,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatsTitle>{title}</StatsTitle>}

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
