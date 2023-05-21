import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { DeliveryFeeCalculator } from './fee/delivery-fee-calculator';
import { DeliveryFeeCalculatorUSA } from './fee/delivery-fee-calculator-usa';
import { DeliveryFeeCalculatorChina } from './fee/delivery-fee-calculator-china';
import { DeliveryAddressService } from './address/delivery-address.service';
import { DeliveryAddressRepository } from './address/delivery-address.repository';
import { DeliveryAddressController } from './address/delivery-address.controller';

@Module({
  controllers: [DeliveryController, DeliveryAddressController],
  providers: [
    DeliveryService,
    DeliveryFeeCalculator,
    DeliveryFeeCalculatorUSA,
    DeliveryFeeCalculatorChina,
    DeliveryAddressService,
    DeliveryAddressRepository,
  ],
  exports: [DeliveryFeeCalculator, DeliveryAddressRepository],
})
export class DeliveryModule {}
