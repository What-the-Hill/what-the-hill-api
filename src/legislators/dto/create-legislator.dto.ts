import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLegislatorDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
