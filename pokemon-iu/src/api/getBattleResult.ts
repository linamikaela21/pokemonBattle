import { ROUTES } from '../constants/routes';

export const getBattleResult = async (
  selectedPokemonId?: number,
  randomPokemonId?: number,
) => {
  if (!selectedPokemonId || !randomPokemonId) return;

  const response = await fetch(
    ROUTES.getBattleWinner(selectedPokemonId, randomPokemonId),
  );

  if (!response.ok)
    throw new Error(`Failed fetching pokemons: ${response.statusText}`);

  const data = await response.json();
  return data;
};
