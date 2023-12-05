import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  margin: auto;
  box-shadow: 0 -2px 5px 2px #afaeae;
  border-radius: 3px;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  background: teal;
`;

export const TrHead = styled.tr`
  color: #fff;
  text-transform: uppercase;
`;

export const ThHead = styled.th`
  text-align: center;
  border-right: 1px solid #fff;
  width: 33%;
  padding: 7px;
  &:first-child {
    border-top-left-radius: 3px;
  }
  &:last-child {
    border-right: none;
    border-top-right-radius: 3px;
  }
`;

export const TBody = styled.tbody`
  text-align: center;
`;

export const TrBody = styled.tr`
  background: #fff;
  color: #6c6a6a;
  transition: color ease-in-out 0.3s, background ease-in-out 0.3s;
  &:nth-child(odd) {
    background: #d1d1d1;
  }
  &:hover {
    background: #6e6e6e;
    color: #fff;
  }
`;

export const TdBody = styled.td`
  border-right: 1px solid #6c6a6a;
  width: 33%;
  padding: 7px;
  &:first-child {
    text-align: start;
    padding-left: 30px;
  }
  &:last-child {
    border-right: none;
  }
`;
