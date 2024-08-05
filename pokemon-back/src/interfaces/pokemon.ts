export type PokemonType =
  | 'Grass'
  | 'Fire'
  | 'Water'
  | 'Electric'
  | 'Rock'
  | 'Ground'
  | 'Ice'
  | 'Flying'
  | 'Bug'
  | 'Poison'
  | 'Normal'
  | 'Fighting'
  | 'Psychic'
  | 'Ghost'
  | 'Dragon'
  | 'Steel'
  | 'Fairy'
  | 'Dark';

export interface PokemonInterface {
  id: number;
  name: string;
  type: PokemonType;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  imageUrl: string;
}
