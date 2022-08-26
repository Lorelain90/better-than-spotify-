import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { LyricsService } from './lyrics/lyrics.service';
import { RefreshAccessTokenService } from './refresh-access-token/refresh-access-token.service';
import { RefreshAccessTokenController } from './refresh-access-token/refresh-access-token.controller';
import { LyricsController } from './lyrics/lyrics.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    AppController,
    LoginController,
    RefreshAccessTokenController,
    LyricsController,
  ],
  providers: [
    AppService,
    LoginService,
    LyricsService,
    RefreshAccessTokenService,
  ],
})
export class AppModule {}
