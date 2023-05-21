import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import {
  IsISO31661Alpha2,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsPostalCode,
  IsString,
} from 'class-validator';
import { DeliveryAddress } from './delivery-address.schema';

export class DeliveryAddressDto extends PartialType(DeliveryAddress) {}

export class CreateDeliveryAddress {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  addressId: string;

  @IsNotEmpty()
  @IsString()
  displayName: string;

  @IsOptional()
  @IsString()
  recipientName?: string;

  @IsOptional()
  @IsMobilePhone()
  recipientPhone?: string;

  @ApiProperty({ description: '국가 코드. ISO 3166-1 alpha-2' })
  @IsString()
  @IsNotEmpty()
  @IsISO31661Alpha2()
  countryCode: string;

  @IsString()
  @IsNotEmpty()
  @IsPostalCode('KR')
  zipCode: string;

  @IsNotEmpty()
  @IsString()
  address1: string;

  @IsNotEmpty()
  @IsString()
  address2: string;

  @IsOptional()
  @IsString()
  deliveryRequest?: string;
}

export class CreateDeliveryAddressDto extends OmitType(CreateDeliveryAddress, [
  'userId',
  'addressId',
] as const) {}

export class UpdateDeliveryAddress extends PartialType(CreateDeliveryAddress) {}

export class UpdateDeliveryAddressDto extends OmitType(UpdateDeliveryAddress, [
  'userId',
] as const) {}
