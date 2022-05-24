import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/')
@ApiTags('Root')
export class RootController {
  @Get()
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  root(): string {
    return 'Backend Challenge 2022 🏅 - Covid Daily Cases';
  }
}
