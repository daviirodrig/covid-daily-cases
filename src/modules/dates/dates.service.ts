import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntryRepository } from 'src/shared/repositories/entry.repository';

@Injectable()
export class DatesService {
  constructor(
    @InjectRepository(EntryRepository) private entryRepository: EntryRepository,
  ) {}

  async getDates() {
    const entries = await this.entryRepository.find({
      order: {
        date: 'ASC',
      },
    });

    const res = {
      dates: [],
    };

    res.dates = [
      ...new Set(
        entries.map((entry) => {
          return entry.date.toISOString().split('T')[0];
        }),
      ),
    ];

    return res;
  }
}
