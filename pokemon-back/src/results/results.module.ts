import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { Result } from '../database/entities/results.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Result])],
  providers: [ResultsService],
  controllers: [ResultsController],
})
export class ResultsModule {}
