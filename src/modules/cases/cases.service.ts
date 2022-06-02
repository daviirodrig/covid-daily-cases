import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntryRepository } from 'src/shared/repositories/entry.repository';

@Injectable()
export class CasesService {
  constructor(
    @InjectRepository(EntryRepository) private entryRepository: EntryRepository,
  ) {}

  async getCasesByDate(dateParam: string) {
    const date = new Date(dateParam + ' 21:00:00');

    const entries = await this.entryRepository.find({
      where: {
        date: date,
      },
    });

    // throw 404 if no entries found
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
      }
      if (!res.countries[entry.location][entry.variant]) {
        res.countries[entry.location][entry.variant] = entry.num_sequences;
      } else {
        res.countries[entry.location][entry.variant] += entry.num_sequences;
      }
    });

    return res;
  }
}
