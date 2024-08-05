import React from 'react';
import { CardMedia, Grid, Typography } from '@mui/material';
import { CustomCard, CustomContainer } from './styles';
import pokemonSilhouette from '../../assets/pokemonSilhouette.png';

export const PokemonListSkeleton = (): JSX.Element => {
  return (
    <CustomContainer container spacing={{ xs: 2 }} columns={{ md: 15, lg: 15 }}>
      {Array.from(Array(5)).map((_, index) => (
        <Grid key={index} item xs={2} sm={2} md={3} lg={3}>
          <CustomCard variant="elevation" elevation={8}>
            <CardMedia
              component="img"
              sx={{
                height: 100,
                width: 100,
                objectFit: 'cover',
              }}
              image={pokemonSilhouette}
              alt="loading"
            />
            <Typography
              sx={{
                alignSelf: 'start',
              }}
              variant="subtitle2"
            >
              Loading...
            </Typography>
          </CustomCard>
        </Grid>
      ))}
    </CustomContainer>
  );
};
