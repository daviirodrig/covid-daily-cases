import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DatesService } from './dates.service';

@ApiTags('Dates')
@Controller('/dates')
export class DatesController {
  constructor(private datesService: DatesService) {}

  @Get()
  getDates() {
    const dates = this.datesService.getDates();
    return dates;
  }
}
