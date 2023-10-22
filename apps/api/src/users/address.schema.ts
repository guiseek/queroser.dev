import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

export type AddressDocument = Address & Document

@Schema()
export class Address {
  // @Transform(({value}) => value.toString())
  // _id: string

  @Prop()
  country: string

  @Prop()
  city: string
}

export const AddressSchema = SchemaFactory.createForClass(Address)
