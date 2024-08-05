import styled from '@emotion/styled';
import { Card, Grid } from '@mui/material';

export const CustomContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  maxHeight: '220px',
  overflowX: 'auto',
  paddingBottom: '20px',
  paddingRight: '5px',
  '@media (max-width: 900px)': {
    flexDirection: 'column',
  },
});

export const ListContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '10px',
});

export const CustomCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  padding: '10px',
});
