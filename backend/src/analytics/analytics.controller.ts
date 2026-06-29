import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

class TrackEventDto {
  @IsString() @IsNotEmpty() event: string;
  @IsString() @IsNotEmpty() page: string;
  data?: Record<string, unknown>;
}

@ApiTags('Analytics')
@Controller('analytics')
export class AnalyticsController {
  private events: Array<{ event: string; page: string; data?: unknown; timestamp: Date }> = [];

  @Post('track')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Track user behavior event' })
  track(@Body() dto: TrackEventDto) {
    this.events.push({ ...dto, timestamp: new Date() });
    return { ok: true };
  }
}
