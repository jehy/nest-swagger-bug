import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { someEnum } from '@nest-swagger-bug/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): someEnum {
    return someEnum.YELLOW;
  }
}
