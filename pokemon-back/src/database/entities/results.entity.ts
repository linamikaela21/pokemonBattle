import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('results')
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  winnerName: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  looserName: string;
}
