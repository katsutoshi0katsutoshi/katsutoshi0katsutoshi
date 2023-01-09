import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'le2m1ei4xp',
  apiKey: process.env.API_KEY,
});