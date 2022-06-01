import type { Competition } from '../types';

export async function get() {
  const response = await fetch(
    'https://liveresultat.orientering.se/api.php?method=getcompetitions'
  );
  const text = await response.text();
  const body = JSON.parse(text.replace(/\t/g, ''));
  const today = new Date().toISOString().substring(0, 10);

  const competitions = body.competitions.filter(
    (competition: Competition) => competition.date === today && competition.id !== 22939
  );
  return { body: { competitions } };
}
