import { Controller, Get, Param } from '@nestjs/common';
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
    const selectedPokemon = await this.pokemonService.findOne(id);
    const ramdomPokemon = await this.pokemonService.findOne(ramdomId);

    const { winner, looser } = await this.pokemonService.fight(
      selectedPokemon,
      ramdomPokemon,
    );

    await this.resultsService.addBattle(winner.name, looser.name);
    return winner;
  }
}
