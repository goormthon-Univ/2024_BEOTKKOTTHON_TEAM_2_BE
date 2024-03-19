import { Test, TestingModule } from '@nestjs/testing';
import { PersonalmuckatImageService } from './personalmuckat-image.service';

describe('PersonalmuckatImageService', () => {
  let service: PersonalmuckatImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalmuckatImageService],
    }).compile();

    service = module.get<PersonalmuckatImageService>(PersonalmuckatImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
