import {
  Controller,
  Get,
  NotFoundException,
  NotImplementedException,
  Param,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from '../database/entities/pokemon.entity';
import { ResultsService } from '../results/results.service';

@Controller('pokemons')
export class PokemonController {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly resultsService: ResultsService,
  ) {}

  @Get()
  findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pokemon> {
    return await this.pokemonService.findOne(id);
  }

  @Get(':id/vs/:ramdomId')
  async fight(@Param('id') id: string, @Param('ramdomId') ramdomId: string) {
    try {
      const selectedPokemon = await this.pokemonService.findOne(id);
      const ramdomPokemon = await this.pokemonService.findOne(ramdomId);

      if (!selectedPokemon || !ramdomPokemon) {
        return new NotFoundException({
          message: 'Pokemon not found',
        });
      }

      const { winner, looser } = await this.pokemonService.fight(
        selectedPokemon,
        ramdomPokemon,
      );

      await this.resultsService.addBattle(winner.name, looser.name);
      return winner;
    } catch (error) {
      return new NotImplementedException({
        message: error.message,
      });
    }
  }
}
