import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntryRepository } from 'src/shared/repositories/entry.repository';

@Injectable()
export class GetCasesCumulativeService {
  constructor(
    @InjectRepository(EntryRepository)
    private readonly entryRepository: EntryRepository,
  ) {}

  async getCasesCumulative(dateParam: string) {
    const date = new Date(dateParam + ' 21:00:00');

    const entries = await this.entryRepository.find({
      where: {
        date: date,
      },
    });

    if (entries.length === 0) {
      throw new NotFoundException('No entries found');
    }

    const res = {
      date: dateParam,
      countries: {},
    };

    entries.forEach((entry) => {
      if (!res.countries[entry.location]) {
        res.countries[entry.location] = {};
        res.countries[entry.location]['cases'] = entry.num_sequences;
      } else {
        res.countries[entry.location]['cases'] += entry.num_sequences;
      }
    });

    return res;
  }
}
