import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsDateString,
  IsUUID
} from 'class-validator';

export default class DocumentDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  createdAt: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  lastAccessedAt: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  size: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  fileUrl: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  archivematicaSipId?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  userId: string;
}
