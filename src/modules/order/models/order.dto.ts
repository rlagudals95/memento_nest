import { PartialType } from '@nestjs/swagger';
import { Order } from './order.schema';
import { ArrayMinSize, IsNotEmpty, IsString } from 'class-validator';
import { CartDto } from '@modules/cart/models/cart.dto';
import { DeliveryAddressDto } from '@modules/delivery/address/models/delivery-address.dto';
import { OrderStatus } from './order.model';

export class OrderDto extends PartialType(Order) {}

export class CreateOrder {
  userId: string;
  orderId: string;
  carts: CartDto[];
  address: DeliveryAddressDto;
  status: OrderStatus;
}

export class CreateOrderDto {
  @ArrayMinSize(1)
  productIds: string[];

  @IsNotEmpty()
  @IsString()
  addressId: string;
}

export class UpdateOrder extends PartialType(CreateOrder) {}

export class UpdateOrderDto {
  carts: CartDto[];
  address: DeliveryAddressDto;
}
