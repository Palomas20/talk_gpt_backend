import { Module } from '@nestjs/common';
import { TextSpeechController } from './text-to-speech.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [textToSpeechService, ChatService],
})
export class AppModule { }
