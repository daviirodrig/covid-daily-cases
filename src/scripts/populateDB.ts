import { Entry } from '../shared/entities/entry.entity';
import { createConnection } from 'typeorm';
import * as csv from 'csvtojson';
import fetch from 'node-fetch';

async function populateDB(): Promise<void> {
  const connection = await createConnection();

  const csvUrl = 'https://challenges.coode.sh/covid/data/covid-variants.csv';
  const csvFetch = await fetch(csvUrl);
  const csvFile = await csvFetch.text();

  const jsonArray = await csv().fromString(csvFile);

  for (const i of jsonArray) {
    const entry = new Entry();

    entry.location = i.location;
    entry.date = new Date(i.date);
    entry.variant = i.variant;
    entry.num_sequences = Number(i.num_sequences);
    entry.perc_sequences = Number(i.perc_sequences);
    entry.num_sequences_total = Number(i.num_sequences_total);

    await entry.save();

    console.count('Entry saved');
  }

  await connection.close();
}
populateDB();
