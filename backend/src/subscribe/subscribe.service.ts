import { Injectable, ConflictException } from '@nestjs/common';
import { SubscribeDto } from './subscribe.dto';

interface Subscriber {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subscribedAt: Date;
}

@Injectable()
export class SubscribeService {
  private subscribers: Subscriber[] = [];

  async subscribe(dto: SubscribeDto): Promise<{ message: string; subscriber: Subscriber }> {
    const existing = this.subscribers.find(s => s.email === dto.email);
    if (existing) {
      throw new ConflictException('Email này đã đăng ký nhận tin tức rồi!');
    }

    const subscriber: Subscriber = {
      id: Date.now().toString(),
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
      subscribedAt: new Date(),
    };

    this.subscribers.push(subscriber);

    // Send to webhook if configured
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'new_subscriber',
            data: subscriber,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (e) {
        console.error('Webhook failed:', e);
      }
    }

    return {
      message: `Xin chào ${subscriber.name}! Bạn đã đăng ký nhận tin thành công.`,
      subscriber,
    };
  }

  getAll(): Subscriber[] {
    return this.subscribers;
  }
}
