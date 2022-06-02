import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetCasesCumulativeService } from './getCasesCumulative.service';

@ApiTags('Cases')
@Controller('/cases')
export class GetCasesCumulativeController {
  constructor(
    private readonly getCasesCumulativeService: GetCasesCumulativeService,
  ) {}

  @Get('/:date/cumulative')
  getCasesCumulative(@Param('date') date: string) {
    return this.getCasesCumulativeService.getCasesCumulative(date);
  }
}
