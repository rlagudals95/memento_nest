import { Injectable, NotFoundException } from '@nestjs/common';
import generateNoDashUUID from '@utils/uuid.util';
import {
  CreateDeliveryAddressDto,
  UpdateDeliveryAddressDto,
  DeliveryAddressDto,
} from './models/delivery-address.dto';
import { DeliveryAddressRepository } from './delivery-address.repository';

@Injectable()
export class DeliveryAddressService {
  constructor(
    private readonly deliveryAddressRepository: DeliveryAddressRepository,
  ) {}

  private createAddressId() {
    const idLength = 10;
    return generateNoDashUUID(idLength);
  }

  async create(
    createDeliveryAddressDto: CreateDeliveryAddressDto,
    userId: string,
  ): Promise<DeliveryAddressDto> {
    try {
      return await this.deliveryAddressRepository.create({
        ...createDeliveryAddressDto,
        userId,
        addressId: this.createAddressId(),
      });
    } catch (error) {
      throw error;
    }
  }

  async findAll(userId: string): Promise<DeliveryAddressDto[]> {
    try {
      const result = await this.deliveryAddressRepository.findByUserId(userId);
      return result.sort((a, b) => b.updatedAt - a.updatedAt);
    } catch (error) {
      throw error;
    }
  }

  async findOne(
    addressId: string,
    userId: string,
  ): Promise<DeliveryAddressDto> {
    try {
      const item = await this.deliveryAddressRepository.findOne(
        userId,
        addressId,
      );
      if (!item) {
        throw new NotFoundException();
      }
      return item;
    } catch (error) {
      throw error;
    }
  }

  async update(
    addressId: string,
    updateDeliveryAddressDto: UpdateDeliveryAddressDto,
    userId: string,
  ) {
    try {
      return await this.deliveryAddressRepository.update({
        userId,
        addressId,
        ...updateDeliveryAddressDto,
      });
    } catch (error) {
      throw error;
    }
  }

  async delete(addressId: string, userId: string) {
    try {
      return await this.deliveryAddressRepository.delete(userId, addressId);
    } catch (error) {
      throw error;
    }
  }
}
