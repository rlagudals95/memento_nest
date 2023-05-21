import { CartModule } from '@modules/cart/cart.module';
import { CustomsService } from '@modules/customs/customs.service';
import { DeliveryModule } from '@modules/delivery/delivery.module';
import { UserRepository } from '@modules/user/user.repository';
import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';

@Module({
  imports: [CartModule, DeliveryModule],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository, UserRepository, CustomsService],
})
export class OrderModule {}
