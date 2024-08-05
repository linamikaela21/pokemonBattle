import { ROUTES } from '../constants/routes';

export const getPokemons = async () => {
  const response = await fetch(ROUTES.getPokemons);

  if (!response.ok)
    throw new Error(`Failed fetching pokemons: ${response.statusText}`);

  const data = await response.json();
  return data;
};
