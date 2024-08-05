import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from '../database/entities/results.entity';

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(Result)
    private resultsRepository: Repository<Result>,
  ) {}

  async addBattle(winnerName: string, looserName: string): Promise<Result> {
    const result = this.resultsRepository.create({
      winnerName,
      looserName,
      date: new Date(),
    });

    return await this.resultsRepository.save(result);
  }

  async findAll(): Promise<Result[]> {
    return await this.resultsRepository.find();
  }
}
