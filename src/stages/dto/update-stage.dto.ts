import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateStageDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
