export async function get() {
  const response = await fetch(
    'https://liveresultat.orientering.se/api.php?method=getclasses&comp=22636'
  );
  return { body: await response.json() };
}
