const API_URL = process.env.REACT_APP_API_URL;

export const ROUTES = {
  getPokemons: `${API_URL}/pokemons`,
  getPokemonById: (pokemonId: number) => `${API_URL}/pokemons/${pokemonId}`,
  getBattleWinner: (selectedPokemonId: number, ramdonPokemonId: number) =>
    `${API_URL}/pokemons/${selectedPokemonId}/vs/${ramdonPokemonId}`,
};
