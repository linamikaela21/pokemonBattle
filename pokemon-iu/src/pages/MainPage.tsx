import React, { useEffect } from 'react';
import { PokemonList } from '../components/PokemonList';
import { usePokemons } from '../hooks/usePokemons';
import { Container, Typography } from '@mui/material';
import { PokemonBattle } from '../components/PokemonBattle';
import { usePokemonStore } from '../store/pokemonsStore';
import { WinnerSign } from '../components/PokemonBattle/WinnerSign';

export const MainPage = (): JSX.Element => {
  const setPokemons = usePokemonStore((state) => state.setPokemons);
  const winnerPokemon = usePokemonStore((state) => state.pokemonWinner);
  const { data, isLoading } = usePokemons();

  useEffect(() => {
    setPokemons(data);
  }, [data]);

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        component="h1"
        sx={{
          textAlign: 'start',
          marginTop: 4,
          paddingLeft: '10px',
        }}
      >
        Battle of Pokemon
      </Typography>
      <PokemonList pokemons={data} loading={isLoading} />
      {winnerPokemon ? <WinnerSign winnerName={winnerPokemon.name} /> : null}
      <PokemonBattle pokemons={data} loading={isLoading} />
    </Container>
  );
};
