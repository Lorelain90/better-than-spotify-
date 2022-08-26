import { Controller, Get, Req, Res } from '@nestjs/common';
import { LyricsService } from './lyrics.service';
import { Request, Response } from 'express';

@Controller('lyrics')
export class LyricsController {
  constructor(private readonly lyricsService: LyricsService) {}
  @Get()
  async gLyric(@Req() req: Request, @Res() res: Response) {
    try {
      return this.lyricsService.gLyric(req, res);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}
