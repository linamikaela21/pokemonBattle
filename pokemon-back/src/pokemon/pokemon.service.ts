import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from '../database/entities/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonRepository.find();
  }

  async findOne(id: string): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findOne({
      where: {
        id,
      },
    });

    if (!pokemon) {
      throw new NotFoundException('Pokemon not found');
    }

    return pokemon;
  }

  async fight(
    pokemon: Pokemon,
    pokemonRamdon: Pokemon,
  ): Promise<{ winner: Pokemon; looser: Pokemon }> {
    const determineFirstAttacker = (p1: Pokemon, p2: Pokemon): Pokemon => {
      if (p1.speed > p2.speed) return p1;
      if (p1.speed < p2.speed) return p2;
      return p1.attack >= p2.attack ? p1 : p2;
    };

    const calculateDamage = (attacker: Pokemon, defender: Pokemon): number => {
      const damage = attacker.attack - defender.defense;
      return damage > 0 ? damage : 1;
    };

    let firstAttacker = determineFirstAttacker(pokemon, pokemonRamdon);
    let secondAttacker = firstAttacker === pokemon ? pokemonRamdon : pokemon;

    while (true) {
      const damage = calculateDamage(firstAttacker, secondAttacker);
      secondAttacker.hp -= damage;

      if (secondAttacker.hp <= 0) {
        return { winner: firstAttacker, looser: secondAttacker };
      }

      [firstAttacker, secondAttacker] = [secondAttacker, firstAttacker];
    }
  }
}
