import type { Competition } from '../types';

export async function get() {
  const response = await fetch(
    'https://liveresultat.orientering.se/api.php?method=getcompetitions'
  );
  const text = await response.text();
  const body = JSON.parse(text.replace(/\t/g, ''));

  const descending = body.competitions.filter((competition: Competition) =>
    /WOC Tour/.test(competition.name)
  );
  return { body: { competitions: descending.reverse() } };
}
