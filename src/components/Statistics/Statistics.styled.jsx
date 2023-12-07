import styled from 'styled-components';

export const StatisticsSection = styled.div`
  width: 400px;
  border-radius: 5px;
  text-align: center;
  margin: auto;
  box-shadow: 0 -2px 5px 2px #afaeae;
  background: #fff;
`;

export const StatsTitle = styled.h2`
  text-transform: uppercase;
  font-size: 18px;
  padding: 30px;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  text-align: center;
  padding: 10px 15px;
  width: 20%;
  &:first-child {
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-bottom-right-radius: 5px;
  }
`;

export const StatsLabel = styled.p`
  font-size: 16px;
  padding-bottom: 10px;
  color: #fff;
`;

export const StatsPer = styled.p`
  font-size: 20px;
  color: #fff;
`;
