import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { ResultsModule } from './results/results.module';

@Module({
  imports: [DatabaseModule, PokemonModule, ResultsModule],
  exports: [DatabaseModule],
})
export class AppModule {}
