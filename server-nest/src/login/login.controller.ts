import { Controller, Post, Req, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { Request, Response } from 'express';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async pLogin(@Req() req: Request, @Res() res: Response): Promise<any> {
    const code = req.body.code;

    try {
      return await this.loginService.pLogin(code).then((data) => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        });
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}
