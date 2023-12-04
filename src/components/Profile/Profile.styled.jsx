import styled from 'styled-components';

export const TaskCard = styled.div`
  margin: auto;
  width: 400px;
  box-shadow: 0 0 5px 5px #afaeae;
  border-radius: 5px;
`;

export const ProfileCard = styled.div`
  text-align: center;
  padding: 40px 0;
  width: 280px;
  margin: auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  background: #fff;
  margin: auto;
  box-shadow: 0 -2px 5px 2px #afaeae;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const ProfileImg = styled.img`
  width: 50px;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 15px;
`;

export const Name = styled.p`
  color: #000;
  font-size: 24px;
  padding-bottom: 10px;
`;

export const Tag = styled.p`
  color: #808080;
  font-size: 16px;
  padding-bottom: 10px;
`;

export const Location = styled.p`
  color: #808080;
  font-size: 16px;
  padding-bottom: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  background: #ededed;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 2px 5px 2px #afaeae;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid #c6c6c6;
  width: 33%;
  border-top: 0;
  border-bottom: 0;
  padding: 15px;
  border-left: none;

  /* &:first-child {
    border-left: none;
  } */
  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  color: #808080;
  font-size: 14px;
  padding-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 14px;
`;
