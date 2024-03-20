import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GroupmuckatImageService } from './groupmuckat-image.service';

@ApiTags('그룹 먹킷리스트 추억 보관함')
@Controller('/api/groupmuckat-image')
export class GroupmuckatImageController {
    constructor(private readonly groupmuckatImage: GroupmuckatImageService){}
    

}
