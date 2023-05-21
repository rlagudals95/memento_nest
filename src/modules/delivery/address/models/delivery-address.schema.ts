import { Schema } from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';

const deliveryAddressSchemaPayload = {
  displayName: String,
  recipientName: String,
  recipientPhone: String,
  countryCode: String,
  zipCode: String,
  address1: String,
  address2: String,
  deliveryRequest: String,
};

export const DeliveryAddressSchema = new Schema(
  {
    userId: { type: String, hashKey: true },
    addressId: {
      type: String,
      rangeKey: true,
    },
    ...deliveryAddressSchemaPayload,
  },
  {
    timestamps: true,
  },
);

export const deliveryAddressSchema = {
  type: Object,
  schema: {
    ...deliveryAddressSchemaPayload,
    userId: String,
    addressId: String,
  },
};

export class DeliveryAddress extends Item {
  userId: string;
  addressId: string;
  displayName: string;
  recipientName: string;
  recipientPhone: string;
  countryCode: string;
  zipCode: string;
  address1: string;
  address2: string;
  deliveryRequest?: string;
  createdAt: number;
  updatedAt: number;
}
