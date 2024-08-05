import React from 'react';
import {
  CardContent,
  Divider,
  Typography,
  Stack,
  Skeleton,
  CardMedia,
} from '@mui/material';
import pokemonSiluette from '../../assets/pokemonSiluette.png';
import { CustomPokemonCard } from './styles';

export const PokemonDetailCardSkeleton = (): JSX.Element => {
  return (
    <CustomPokemonCard>
      <CardMedia
        sx={{ height: 160 }}
        component="img"
        image={pokemonSiluette}
        alt="loading"
      />
      <CardContent>
        <Typography gutterBottom>
          <Skeleton />
        </Typography>
        <Divider />
        <Stack>
          {Array.from(Array(4)).map((_, index) => (
            <CustomizedProgressBarsSkeleton key={index} />
          ))}
        </Stack>
      </CardContent>
    </CustomPokemonCard>
  );
};

export const CustomizedProgressBarsSkeleton = () => {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <Typography variant="subtitle1">
        <Skeleton />
      </Typography>
      <Skeleton variant="rectangular" height={10} />
    </Stack>
  );
};
