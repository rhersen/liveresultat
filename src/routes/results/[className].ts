export async function get({ params }: { params: { className: string } }) {
  const method = 'getclassresults';
  const comp = '22636';
  const response = await fetch(
    [
      'https://liveresultat.orientering.se/api.php',
      [`method=${method}`, `comp=${comp}`, `class=${params.className}`].join('&')
    ].join('?')
  );
  return { body: await response.json() };
}
