import { Test, TestingModule } from '@nestjs/testing';
import { PersonalMuckatlistService } from './personal-muckatlist.service';

describe('PersonalMuckatlistService', () => {
  let service: PersonalMuckatlistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalMuckatlistService],
    }).compile();

    service = module.get<PersonalMuckatlistService>(PersonalMuckatlistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
