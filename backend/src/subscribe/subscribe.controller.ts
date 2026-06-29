import { Body, Controller, Get, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SubscribeService } from './subscribe.service';
import { SubscribeDto } from './subscribe.dto';

@ApiTags('Subscribe')
@Controller('subscribe')
export class SubscribeController {
  constructor(private readonly subscribeService: SubscribeService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Subscribe to newsletter' })
  @ApiResponse({ status: 201, description: 'Subscribed successfully' })
  @ApiResponse({ status: 409, description: 'Email already subscribed' })
  async subscribe(@Body() dto: SubscribeDto): Promise<unknown> {
    return this.subscribeService.subscribe(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all subscribers (admin)' })
  getAll(): unknown {
    return this.subscribeService.getAll();
  }
}
