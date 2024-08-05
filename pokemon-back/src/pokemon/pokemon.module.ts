import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from '../database/entities/pokemon.entity';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { Module } from '@nestjs/common';
import { Result } from '../database/entities/results.entity';
import { ResultsService } from '../results/results.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, Result])],
  providers: [PokemonService, ResultsService],
  controllers: [PokemonController],
})
export class PokemonModule {}
