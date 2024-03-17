import { Test, TestingModule } from '@nestjs/testing';
import { GroupMuckatlistController } from './group-muckatlist.controller';

describe('GroupMuckatlistController', () => {
  let controller: GroupMuckatlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupMuckatlistController],
    }).compile();

    controller = module.get<GroupMuckatlistController>(GroupMuckatlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
