import { Test, TestingModule } from '@nestjs/testing';
import { FavoritelistService } from './favoritelist.service';

describe('FavoritelistService', () => {
  let service: FavoritelistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritelistService],
    }).compile();

    service = module.get<FavoritelistService>(FavoritelistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
