import styled from '@emotion/styled';
import { Card, LinearProgress, linearProgressClasses } from '@mui/material';

export const CustomPokemonCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  borderRadius: 5,
  '@media (min-width: 900px)': {
    maxWidth: 350,
    minWidth: 350,
  },
});

export const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#DCDCDC',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#8DFA70',
  },
}));
