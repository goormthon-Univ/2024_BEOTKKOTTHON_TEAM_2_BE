import { Test, TestingModule } from '@nestjs/testing';
import { GroupMuckatlistService } from './group-muckatlist.service';

describe('GroupMuckatlistService', () => {
  let service: GroupMuckatlistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupMuckatlistService],
    }).compile();

    service = module.get<GroupMuckatlistService>(GroupMuckatlistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
