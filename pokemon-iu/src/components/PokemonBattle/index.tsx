import React, { useCallback, useMemo } from 'react';
import { Grid, Button } from '@mui/material';
import { getRamdonPokemon } from '../../utils/getRamdonPokemon';
import { PokemonDetailCard } from '../PokemonDetailCard';
import { PokemonInterface } from '../../interfaces/Pokemon';
import { getBattleResult } from '../../api/getBattleResult';
import { usePokemonStore } from '../../store/pokemonsStore';
import { Container } from './styles';

interface PokemonBattleProps {
  pokemons: PokemonInterface[];
  loading: boolean;
}

export const PokemonBattle = ({
  pokemons,
  loading,
}: PokemonBattleProps): JSX.Element => {
  const winnerPokemon = usePokemonStore((state) => state.pokemonWinner);
  const setBattleResult = usePokemonStore((state) => state.setBattleResult);
  const selectedPokemon = usePokemonStore((state) => state.selectedPokemon);
  const setSelectedPokemon = usePokemonStore(
    (state) => state.setSelectedPokemon,
  );
  const ramdomPokemonData = useMemo(
    () => getRamdonPokemon(pokemons, selectedPokemon?.id),
    [pokemons, selectedPokemon?.id],
  );

  const handleStartBattle = async () => {
    const battleResult = await getBattleResult(
      selectedPokemon?.id,
      ramdomPokemonData?.id,
    );
    setBattleResult(battleResult);
    return battleResult;
  };

  const handleRestartBattle = useCallback(() => {
    setBattleResult(null);
    setSelectedPokemon(undefined);
  }, [setBattleResult]);

  return (
    <Container container columns={12} spacing={{ xs: 1, md: 3 }}>
      <Grid item xs={4} md={4} lg={5}>
        <PokemonDetailCard pokemon={selectedPokemon} loading={loading} />
      </Grid>
      <Grid
        item
        xs={3}
        md={3}
        lg={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          color={winnerPokemon ? 'primary' : 'success'}
          onClick={winnerPokemon ? handleRestartBattle : handleStartBattle}
          disabled={loading || !selectedPokemon}
          sx={{
            textTransform: 'none',
          }}
        >
          {winnerPokemon ? 'Restart' : 'Start Battle'}
        </Button>
      </Grid>
      <Grid
        item
        xs={4}
        md={4}
        lg={5}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <PokemonDetailCard pokemon={ramdomPokemonData} loading={loading} />
      </Grid>
    </Container>
  );
};
