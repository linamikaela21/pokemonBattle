import { ROUTES } from '../constants/routes';

export const getPokemonById = async (pokemonId: number) => {
  const response = await fetch(ROUTES.getPokemonById(pokemonId));

  if (!response.ok)
    throw new Error(
      `Failed fetching pokemon id ${pokemonId}: ${response.statusText}`,
    );

  const data = await response.json();
  return data;
};
