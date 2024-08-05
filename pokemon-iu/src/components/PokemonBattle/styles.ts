import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';

export const Container = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 10px 20px 10px',
  '@media (max-width: 900px)': {
    overflowY: 'auto',
  },
});

export const WinnerSignText = styled(Typography)({
  textAlign: 'start',
  backgroundColor: '#E4F9FE',
  fontSize: '16px',
  fontWeight: 'semi-condensed',
  border: '1px solid black',
  borderRadius: '4px',
  padding: '10px 20px',
  margin: '10px',
});
