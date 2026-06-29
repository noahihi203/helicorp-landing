import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ChatMessageDto } from './chat.dto';
import { GoogleGenerativeAI } from '@google/generative-ai';

const PRODUCT_CONTEXT = `
Bạn là trợ lý AI của PawCam Pro - Camera thông minh chăm sóc thú cưng cao cấp.
Thông tin sản phẩm:
- Tên: PawCam Pro
- Giá: 2.990.000 VNĐ
- Tính năng chính: Camera 4K, AI phát hiện chuyển động thú cưng, đàm thoại 2 chiều, cho ăn tự động tích hợp, theo dõi sức khỏe qua AI, kết nối app điện thoại
- Thông số: Độ phân giải 4K UHD, góc nhìn 160°, night vision 10m, lưu trữ cloud + thẻ nhớ 256GB, pin 8000mAh, IP65 chống nước
- Bảo hành: 24 tháng, miễn phí vận chuyển toàn quốc
- Phân phối bởi HELICORP - Healthy Living Corporation tại Việt Nam

Hãy trả lời bằng tiếng Việt, thân thiện, ngắn gọn (max 150 từ). Chỉ tư vấn về sản phẩm PawCam Pro.
`;

@Injectable()
export class ChatService {
  private genAI: GoogleGenerativeAI | null = null;

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get<string>('GEMINI_API_KEY');
    if (apiKey) {
      this.genAI = new GoogleGenerativeAI(apiKey);
    }
  }

  async chat(dto: ChatMessageDto): Promise<{ reply: string }> {
    if (!this.genAI) {
      return {
        reply:
          'Xin chào! Tôi là trợ lý PawCam Pro. Hiện tại API key chưa được cấu hình. Vui lòng liên hệ hotline 1800 xxxx để được tư vấn trực tiếp!',
      };
    }

    try {
      const model = this.genAI.getGenerativeModel({
        model: 'gemini-2.0-flash',
      });

      const history = (dto.history || []).map((h) => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.content }],
      }));

      const chat = model.startChat({
        history: [
          { role: 'user', parts: [{ text: PRODUCT_CONTEXT }] },
          {
            role: 'model',
            parts: [{ text: 'Tôi đã hiểu. Tôi sẽ tư vấn về PawCam Pro.' }],
          },
          ...history,
        ],
      });

      const result = await chat.sendMessage(dto.message);
      return { reply: result.response.text() };
    } catch (error) {
      return { reply: 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau!' };
    }
  }
}
