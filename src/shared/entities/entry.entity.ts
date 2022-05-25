import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  location: string;
  @Column()
  date: Date;
  @Column()
  variant: string;
  @Column()
  num_sequences: number;
  @Column()
  perc_sequences: number;
  @Column()
  num_sequences_total: number;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
}
