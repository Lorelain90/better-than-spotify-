import { Controller, Post, Req, Res } from '@nestjs/common';
import { RefreshAccessTokenService } from './refresh-access-token.service';
import { Request, Response } from 'express';

@Controller('refresh-access-token')
export class RefreshAccessTokenController {
  constructor(private readonly refreshService: RefreshAccessTokenService) {}

  @Post()
  async pRefreshAT(@Req() req: Request, @Res() res: Response): Promise<any> {
    const refreshToken = req.body.refreshToken;

    return this.refreshService
      .pRefreshAT(refreshToken)
      .then((data) => {
        res.json({
          accessToken: data.body.access_token,
          expiresIn: data.body.expires_in,
        });
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  }
}
