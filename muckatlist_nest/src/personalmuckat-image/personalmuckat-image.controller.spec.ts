import { Test, TestingModule } from '@nestjs/testing';
import { PersonalmuckatImageController } from './personalmuckat-image.controller';

describe('PersonalmuckatImageController', () => {
  let controller: PersonalmuckatImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalmuckatImageController],
    }).compile();

    controller = module.get<PersonalmuckatImageController>(PersonalmuckatImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
