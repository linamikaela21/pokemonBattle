import React from 'react';
import {
  CardContent,
  Divider,
  Typography,
  Stack,
  CardMedia,
  InputLabel,
} from '@mui/material';
import { BorderLinearProgress, CustomPokemonCard } from './styles';
import { PokemonInterface } from '../../interfaces/Pokemon';
import noPokemon from '../../assets/noPokemon.webp';

interface PokemonDetailCardProps {
  pokemon?: PokemonInterface;
}

export const PokemonDetailCardContent = ({
  pokemon,
}: PokemonDetailCardProps): JSX.Element => {
  const { imageUrl, name, hp, attack, defense, speed } = pokemon || {};
  return (
    <CustomPokemonCard elevation={8}>
      <CardMedia
        sx={{
          height: 160,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          objectFit: 'contain',
          backgroundRepeat: 'repeat',
        }}
        image={imageUrl ?? noPokemon}
        title={name ?? ''}
        component="img"
      />
      <CardContent>
        <Typography gutterBottom>{name}</Typography>
        <Divider
          sx={{
            marginBottom: 1,
          }}
        />
        <Stack spacing={2}>
          <CustomizedProgressBars label="HP" value={hp} />
          <CustomizedProgressBars label="Attack" value={attack} />
          <CustomizedProgressBars label="Defense" value={defense} />
          <CustomizedProgressBars label="Speed" value={speed} />
        </Stack>
      </CardContent>
    </CustomPokemonCard>
  );
};

export const CustomizedProgressBars = ({
  label,
  value = 0,
}: {
  label: string;
  value?: number;
}) => {
  const formattedValue = value * 10;
  return (
    <Stack sx={{ flexGrow: 1 }}>
      <InputLabel sx={{ fontSize: 12, fontWeight: 'bold' }}>{label}</InputLabel>
      <BorderLinearProgress
        variant={value ? 'determinate' : 'indeterminate'}
        value={formattedValue}
      />
    </Stack>
  );
};
