import React from 'react';
import { Typography } from '@mui/material';
import { PokemonInterface } from '../../interfaces/Pokemon';
import { ListContainer } from './styles';
import { usePokemonStore } from '../../store/pokemonsStore';
import { PokemonListSkeleton } from './PokemonListSkeleton';
import { PokemonListContent } from './PokemonListContent';

interface PokemonListProps {
  pokemons: PokemonInterface[];
  loading: boolean;
}

export const PokemonList = ({
  pokemons,
  loading,
}: PokemonListProps): JSX.Element => {
  const setSelectedPokemon = usePokemonStore(
    (state) => state.setSelectedPokemon,
  );

  const handleSelectedPokemon = (pokemonId: number) =>
    setSelectedPokemon(pokemonId);

  return (
    <ListContainer>
      <Typography
        variant="h6"
        sx={{
          paddingBottom: 1,
        }}
      >
        Select your Pokemon
      </Typography>
      {loading ? (
        <PokemonListSkeleton />
      ) : (
        <PokemonListContent
          pokemons={pokemons}
          handleSelectedPokemon={handleSelectedPokemon}
        />
      )}
    </ListContainer>
  );
};
