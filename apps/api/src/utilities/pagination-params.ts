import {IsNumber, IsMongoId, Min, IsOptional} from 'class-validator'
import {Type} from 'class-transformer'
import {ApiProperty} from '@nestjs/swagger'

export class PaginationParams {
  // @ApiProperty()
  @IsOptional()
  @IsMongoId()
  startId?: string

  @ApiProperty({example: 0})
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  skip?: number

  @ApiProperty({example: 10})
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number
}
