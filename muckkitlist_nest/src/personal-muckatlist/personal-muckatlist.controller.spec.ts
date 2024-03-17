import { Test, TestingModule } from '@nestjs/testing';
import { PersonalMuckatlistController } from './personal-muckatlist.controller';

describe('PersonalMuckatlistController', () => {
  let controller: PersonalMuckatlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalMuckatlistController],
    }).compile();

    controller = module.get<PersonalMuckatlistController>(PersonalMuckatlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
