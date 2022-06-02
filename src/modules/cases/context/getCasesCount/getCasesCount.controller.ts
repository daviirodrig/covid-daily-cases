import { Controller, Get, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetCasesCountService } from './getCasesCount.service';

@ApiTags('Cases')
@Controller('/cases')
export class GetCasesCountController {
  constructor(private getCasesCountService: GetCasesCountService) {}

  @Get('/:date/count')
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'No entries found' })
  getCases(@Param('date') date: string) {
    return this.getCasesCountService.getCasesByDate(date);
  }
}
