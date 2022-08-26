import { Test, TestingModule } from '@nestjs/testing';
import { RefreshAccessTokenController } from './refresh-access-token.controller';

describe('RefreshAccessTokenController', () => {
  let controller: RefreshAccessTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RefreshAccessTokenController],
    }).compile();

    controller = module.get<RefreshAccessTokenController>(RefreshAccessTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
