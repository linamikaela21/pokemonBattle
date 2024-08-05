import { useQuery } from '@tanstack/react-query';
import { getPokemonById } from '../api/getPokemonById';

export const usePokemonById = (pokemonId?: number) => {
  if (!pokemonId) return { data: undefined, isLoading: false };

  return useQuery({
    queryKey: ['pokemons', pokemonId ?? ''],
    queryFn: async () => await getPokemonById(pokemonId),
  });
};
