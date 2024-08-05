import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { DatabaseService } from './database.service';
import { Result } from './entities/results.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/pokemons.db',
      synchronize: true,
      entities: [Pokemon, Result],
    }),
    TypeOrmModule.forFeature([Pokemon, Result]),
  ],
  providers: [DatabaseService],
})
export class DatabaseModule {}
