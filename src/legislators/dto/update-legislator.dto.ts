import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateLegislatorDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
