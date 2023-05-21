import { CartDto } from '@modules/cart/models/cart.dto';
import { cartsSchema } from '@modules/cart/models/cart.schema';
import { DeliveryAddressDto } from '@modules/delivery/address/models/delivery-address.dto';
import { deliveryAddressSchema } from '@modules/delivery/address/models/delivery-address.schema';
import { Schema } from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';
import { OrderStatus } from './order.model';

export const OrderSchema = new Schema(
  {
    userId: { type: String, hashKey: true },
    orderId: {
      type: String,
      rangeKey: true,
    },
    carts: cartsSchema,
    address: deliveryAddressSchema,
    status: String,
  },
  {
    timestamps: true,
  },
);

export class Order extends Item {
  userId: string;
  orderId: string;
  carts: CartDto[];
  address: DeliveryAddressDto;
  // payment
  status: OrderStatus;
  createdAt: number;
  updatedAt: number;
}
