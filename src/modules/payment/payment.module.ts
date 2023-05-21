import { CartRepository } from '@modules/cart/cart.repository';
import { OrderRepository } from '@modules/order/order.repository';
import { Module } from '@nestjs/common';
import { PaymentsRepository } from './payments.repository';
import { TossPaymentsController } from './toss/toss-payments.controller';
import { TossPaymentsService } from './toss/toss-payments.service';

@Module({
  controllers: [TossPaymentsController],
  providers: [
    TossPaymentsService,
    PaymentsRepository,
    OrderRepository,
    CartRepository,
  ],
})
export class PaymentModule {}
