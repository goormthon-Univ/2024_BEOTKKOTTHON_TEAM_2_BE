import { Test, TestingModule } from '@nestjs/testing';
import { FavoritelistController } from './favoritelist.controller';

describe('FavoritelistController', () => {
  let controller: FavoritelistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritelistController],
    }).compile();

    controller = module.get<FavoritelistController>(FavoritelistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
