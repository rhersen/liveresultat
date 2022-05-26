export async function get({ params }: { params: { className: string } }) {
  return { body: params };
}
