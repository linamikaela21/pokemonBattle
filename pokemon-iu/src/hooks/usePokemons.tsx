import { useQuery } from '@tanstack/react-query';
import { getPokemons } from '../api/getPokemons';

export const usePokemons = () => {
  return useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => await getPokemons(),
  });
};
