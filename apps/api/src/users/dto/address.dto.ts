import { ApiProperty } from "@nestjs/swagger"

export class AddressDto {
  @ApiProperty()
  country: string
  
  @ApiProperty()
  city: string
}
