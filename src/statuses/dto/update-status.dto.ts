import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateStatusDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  color: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;
}
