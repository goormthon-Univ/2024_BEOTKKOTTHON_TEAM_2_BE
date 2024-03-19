import { Test, TestingModule } from '@nestjs/testing';
import { GroupmuckatImageService } from './groupmuckat-image.service';

describe('GroupmuckatImageService', () => {
  let service: GroupmuckatImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupmuckatImageService],
    }).compile();

    service = module.get<GroupmuckatImageService>(GroupmuckatImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
