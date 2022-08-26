import { Test, TestingModule } from '@nestjs/testing';
import { RefreshAccessTokenService } from './refresh-access-token.service';

describe('RefreshAccessTokenService', () => {
  let service: RefreshAccessTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RefreshAccessTokenService],
    }).compile();

    service = module.get<RefreshAccessTokenService>(RefreshAccessTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
