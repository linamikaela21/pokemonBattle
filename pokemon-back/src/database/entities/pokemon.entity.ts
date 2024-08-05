import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { PokemonType } from '../../interfaces/pokemon';

@Entity('pokemons')
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  hp: number;

  @Column()
  speed: number;

  @Column()
  type: PokemonType;
  enum: [
    'Grass',
    'Fire',
    'Water',
    'Electric',
    'Rock',
    'Ground',
    'Ice',
    'Flying',
    'Bug',
    'Poison',
    'Normal',
    'Fighting',
    'Psychic',
    'Ghost',
    'Dragon',
    'Steel',
    'Fairy',
    'Dark',
  ];

  @Column()
  imageUrl: string;
}
