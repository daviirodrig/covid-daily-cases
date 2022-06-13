import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class DatesService {
  constructor(private prisma: PrismaService) {}

  async getDates() {
    const entries = await this.prisma.entry.findMany({
      orderBy: {
        date: 'asc',
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
