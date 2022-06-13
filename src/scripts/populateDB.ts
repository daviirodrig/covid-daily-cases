import { PrismaClient } from '@prisma/client';
import * as csv from 'csvtojson';
import fetch from 'node-fetch';

async function populateDB(): Promise<void> {
  const prisma = new PrismaClient();

  const csvUrl = 'https://challenges.coode.sh/covid/data/covid-variants.csv';
  const csvFetch = await fetch(csvUrl);
  const csvFile = await csvFetch.text();

  const entries = [];

  const jsonArray = await csv().fromString(csvFile);

  for (const i of jsonArray) {
    const entry: any = {};

    entry.location = i.location;
    entry.date = new Date(i.date);
    entry.variant = i.variant;
    entry.num_sequences = Number(i.num_sequences);
    entry.perc_sequences = Number(i.perc_sequences);
    entry.num_sequences_total = Number(i.num_sequences_total);

    //prisma.entry.createMany([entry]).then(() => {
    //  console.log('Entry created');
    //}
    entries.push(entry);
    console.count('Entry saved');
  }

  prisma.entry
    .createMany({
      data: entries,
    })
    .then(() => {
      console.log('All Entries created');
    });

  prisma.$disconnect();
}
populateDB();
