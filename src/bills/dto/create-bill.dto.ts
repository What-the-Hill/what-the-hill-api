import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBillDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  detail: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  links: string[];

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsInt()
  ranking: number;

  @IsString()
  @IsNotEmpty()
  sponsorId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  summary: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}
