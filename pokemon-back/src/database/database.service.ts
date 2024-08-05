import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  async seedDatabase() {
    try {
      const count = await this.pokemonRepository.count();

      if (count > 0) {
        console.info('Pokemons already loaded.');
        return;
      }

      const dataPath = path.join(__dirname, '../../data/pokemons.json');
      const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

      for (const item of data) {
        const pokemon = this.pokemonRepository.create(item);
        await this.pokemonRepository.save(pokemon);
      }

      console.info('Pokemons loaded successfully.');
    } catch (error) {
      throw InternalServerErrorException;
    }
  }
}
