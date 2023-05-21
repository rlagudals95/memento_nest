import { createDummyCart } from '@modules/cart/models/cart.fixture';
import { dummyDeliveryAddress } from '@modules/delivery/address/models/delivery-address.fixture';
import { CreateOrder } from './order.dto';
import { OrderStatus } from './order.model';

export function createDummyOrder(userId: string, orderId: string): CreateOrder {
  return {
    userId,
    orderId,
    carts: [createDummyCart('testuser1', 'product1')],
    address: dummyDeliveryAddress,
    status: OrderStatus.DRAFT,
  };
}
