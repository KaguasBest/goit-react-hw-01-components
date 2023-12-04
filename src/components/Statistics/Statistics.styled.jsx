import styled from 'styled-components';

export function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

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
  /* background-color: ${randomColor()}; */
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
