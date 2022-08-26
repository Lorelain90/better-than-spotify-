import { Injectable, Get } from '@nestjs/common';
import lyricsFinder from 'lyrics-finder';

@Injectable()
export class LyricsService {
  @Get()
  async gLyric(req: any, res: any) {
    const lyrics =
      (await lyricsFinder(req.query.artist, req.query.track)) ||
      'No Lyrics Found';
    return res.json({ lyrics });
  }
}
