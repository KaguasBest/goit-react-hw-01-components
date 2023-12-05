import {
  TBody,
  THead,
  Table,
  TdBody,
  ThHead,
  TrBody,
  TrHead,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <THead>
        <TrHead>
          <ThHead>Type</ThHead>
          <ThHead>Amount</ThHead>
          <ThHead>Currency</ThHead>
        </TrHead>
      </THead>

      <TBody>
        {items.map(({ id, type, amount, currency }, i) => {
          return (
            <TrBody key={id}>
              <TdBody>{type}</TdBody>
              <TdBody>{amount}</TdBody>
              <TdBody>{currency}</TdBody>
            </TrBody>
          );
        })}
      </TBody>
    </Table>
  );
};
