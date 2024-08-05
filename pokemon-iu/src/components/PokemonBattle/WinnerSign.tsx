import React from 'react';
import { WinnerSignText } from './styles';
interface WinnerSignProps {
  winnerName: string;
}

export const WinnerSign = ({ winnerName }: WinnerSignProps): JSX.Element => {
  return (
    <WinnerSignText variant="subtitle2">{winnerName} wins!</WinnerSignText>
  );
};
