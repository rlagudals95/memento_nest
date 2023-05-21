import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DeliveryAddressService } from './delivery-address.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetLoginedUser } from '@modules/auth/jwt.strategy';
import { LoginedUser } from '@modules/auth/auth.interface';
import {
  CreateDeliveryAddressDto,
  UpdateDeliveryAddressDto,
} from './models/delivery-address.dto';

@ApiTags('delivery')
@Controller({
  path: 'delivery/addresses',
  version: '1',
})
export class DeliveryAddressController {
  constructor(
    private readonly deliveryAddressService: DeliveryAddressService,
  ) {}

  @ApiOperation({ summary: '배송 주소 추가' })
  @Post()
  create(
    @GetLoginedUser() loginedUser: LoginedUser,
    @Body() createDeliveryAddressDto: CreateDeliveryAddressDto,
  ) {
    return this.deliveryAddressService.create(
      createDeliveryAddressDto,
      loginedUser.id,
    );
  }

  @ApiOperation({ summary: '배송 주소 정보 전체 조회' })
  @Get()
  async findAll(@GetLoginedUser() loginedUser: LoginedUser) {
    return await this.deliveryAddressService.findAll(loginedUser.id);
  }

  @ApiOperation({ summary: '배송 주소 정보 조회' })
  @Get(':id')
  findOne(@Param('id') id: string, @GetLoginedUser() loginedUser: LoginedUser) {
    return this.deliveryAddressService.findOne(id, loginedUser.id);
  }

  @ApiOperation({ summary: '배송 주소 수정' })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeliveryAddressDto: UpdateDeliveryAddressDto,
    @GetLoginedUser() loginedUser: LoginedUser,
  ) {
    return this.deliveryAddressService.update(
      id,
      updateDeliveryAddressDto,
      loginedUser.id,
    );
  }

  @ApiOperation({ summary: '배송 주소 삭제' })
  @Delete(':id')
  remove(@Param('id') id: string, @GetLoginedUser() loginedUser: LoginedUser) {
    return this.deliveryAddressService.delete(id, loginedUser.id);
  }
}
