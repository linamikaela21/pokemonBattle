import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PokemonInterface } from '../interfaces/Pokemon';

interface PokemonStore {
  pokemons: PokemonInterface[];
  selectedPokemon?: PokemonInterface;
  pokemonWinner: PokemonInterface | null;

  setPokemons: (pokemons: PokemonInterface[]) => void;
  setBattleResult: (pokemon: PokemonInterface | null) => void;
  setSelectedPokemon: (pokemonId: number | undefined) => void;
}

export const usePokemonStore = create<
  PokemonStore,
  [['zustand/persist', unknown]]
>(
  persist(
    (set, get) => ({
      pokemons: [],
      selectedPokemon: undefined,
      pokemonWinner: null,

      setPokemons: (pokemons: PokemonInterface[]) => {
        set({
          pokemons,
        });
      },

      setBattleResult: (pokemon: PokemonInterface | null) => {
        set({
          pokemonWinner: pokemon,
        });
      },

      setSelectedPokemon: (pokemonId: number | undefined) => {
        const { pokemons } = get();
        const selectedPokemon = pokemons.find(
          (pokemon) => pokemon.id === pokemonId,
        );
        set({
          selectedPokemon,
        });
      },
    }),
    {
      name: 'pokemon-store',
    },
  ),
);
