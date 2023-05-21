import { BaseRepository } from '@modules/common/base.repository';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  CreateDeliveryAddress,
  UpdateDeliveryAddress,
} from './models/delivery-address.dto';
import {
  DeliveryAddress,
  DeliveryAddressSchema,
} from './models/delivery-address.schema';

@Injectable()
export class DeliveryAddressRepository extends BaseRepository<DeliveryAddress> {
  constructor(configService: ConfigService) {
    super('delivery-address', configService);
  }

  getSchema() {
    return DeliveryAddressSchema;
  }

  public async create(item: CreateDeliveryAddress): Promise<DeliveryAddress> {
    return this.model.create(item);
  }

  public async update(item: UpdateDeliveryAddress): Promise<DeliveryAddress> {
    return this.model.update(item);
  }

  public async findOne(
    userId: string,
    addressId: string,
  ): Promise<DeliveryAddress> {
    return this.model.get({ userId, addressId });
  }

  public async findByUserId(userId: string): Promise<DeliveryAddress[]> {
    return this.model.query({ userId }).exec();
  }

  public async delete(userId: string, addressId: string) {
    return this.model.delete({ userId, addressId });
  }
}
