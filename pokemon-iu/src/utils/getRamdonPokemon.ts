import { PokemonInterface } from '../interfaces/Pokemon';

export const getRamdonPokemon = (
  pokemons: PokemonInterface[],
  pokemonId?: number,
) => {
  if (!pokemons || !pokemonId) return;
  const pokemonsAvailable = pokemons?.filter(
    (pokemon: PokemonInterface) => pokemon.id !== pokemonId,
  );
  const randomIndex = Math.floor(Math.random() * pokemonsAvailable.length);

  return pokemonsAvailable[randomIndex];
};
