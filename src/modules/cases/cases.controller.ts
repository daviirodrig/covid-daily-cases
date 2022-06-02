import { Controller, Get, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CasesService } from './cases.service';

@ApiTags('Cases')
@Controller('/cases')
export class CasesController {
  constructor(private casesService: CasesService) {}

  @Get('/:date/count')
  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'No entries found' })
  getCases(@Param('date') date: string) {
    return this.casesService.getCasesByDate(date);
  }
}
