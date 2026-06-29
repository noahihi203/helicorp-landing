import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SubscribeModule } from './subscribe/subscribe.module';
import { ChatModule } from './chat/chat.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SubscribeModule,
    ChatModule,
    AnalyticsModule,
  ],
})
export class AppModule {}
