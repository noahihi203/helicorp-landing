import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ChatService } from './chat.service';
import { ChatMessageDto } from './chat.dto';

@ApiTags('Chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Chat with Gemini AI about PawCam Pro' })
  async chat(@Body() dto: ChatMessageDto) {
    return this.chatService.chat(dto);
  }
}
