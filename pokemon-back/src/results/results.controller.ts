import { Controller, Get } from '@nestjs/common';
import { ResultsService } from './results.service';
import { Result } from '../database/entities/results.entity';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get()
  async findAll(): Promise<Result[]> {
    return await this.resultsService.findAll();
  }
}
