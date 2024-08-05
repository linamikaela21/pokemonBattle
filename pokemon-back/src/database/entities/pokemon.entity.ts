import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { PokemonType } from '../../interfaces/pokemon';

@Entity('pokemons')
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  attack: number;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  defense: number;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  hp: number;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
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
  @IsString()
  imageUrl: string;
}
