import React from 'react';
import { CardMedia, Grid, Typography } from '@mui/material';
import { PokemonInterface } from '../../interfaces/Pokemon';
import { CustomCard, CustomContainer } from './styles';
import pokemonSilhouette from '../../assets/pokemonSilhouette.png';
import { usePokemonStore } from '../../store/pokemonsStore';

interface PokemonListContentProps {
  pokemons: PokemonInterface[];
  handleSelectedPokemon: (pokemonId: number) => void;
}

export const PokemonListContent = ({
  pokemons,
  handleSelectedPokemon,
}: PokemonListContentProps): JSX.Element => {
  const selectedPokemon = usePokemonStore((state) => state.selectedPokemon);
  const pokemonWinner = usePokemonStore((state) => state.pokemonWinner);
  return (
    <CustomContainer container spacing={{ xs: 2 }} columns={{ md: 15, lg: 15 }}>
      {pokemons?.map(({ id, name, imageUrl }) => (
        <Grid key={id} item xs={2} sm={2} md={3} lg={3}>
          <CustomCard
            variant="elevation"
            elevation={8}
            onClick={
              pokemonWinner ? undefined : () => handleSelectedPokemon(id)
            }
            sx={{
              cursor: pokemonWinner ? 'not-allowed' : 'pointer',
              backgroundColor:
                selectedPokemon?.id === id || !!pokemonWinner
                  ? '#EBEBE4 '
                  : 'white',
            }}
          >
            <CardMedia
              component="img"
              image={imageUrl ?? pokemonSilhouette}
              alt={name}
              title={name}
              sx={{
                height: 100,
                width: 100,
                objectFit: 'contain',
              }}
            />
            <Typography
              sx={{
                alignSelf: 'start',
              }}
              variant="subtitle2"
            >
              {name}
            </Typography>
          </CustomCard>
        </Grid>
      ))}
    </CustomContainer>
  );
};
