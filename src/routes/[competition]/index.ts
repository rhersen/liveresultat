export async function get({ params }: { params: { competition: string } }) {
  const response = await fetch(
    `https://liveresultat.orientering.se/api.php?method=getclasses&comp=${params.competition}`
  );
  const body = await response.json();
  return { body: { competition: params.competition, classes: body.classes } };
}
