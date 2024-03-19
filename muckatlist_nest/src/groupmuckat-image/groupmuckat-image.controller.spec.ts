import { Test, TestingModule } from '@nestjs/testing';
import { GroupmuckatImageController } from './groupmuckat-image.controller';

describe('GroupmuckatImageController', () => {
  let controller: GroupmuckatImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupmuckatImageController],
    }).compile();

    controller = module.get<GroupmuckatImageController>(GroupmuckatImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
