import { EntityRepository, Repository } from 'typeorm';
import { Entry } from '../entities/entry.entity';

@EntityRepository(Entry)
export class EntryRepository extends Repository<Entry> {}
