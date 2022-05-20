<script lang="ts">
  import { onMount } from 'svelte';

  interface Result {
    place: string;
    name: string;
    club: string;
    result: string;
    status: number;
    timeplus: string;
    progress: number;
    start: number;
  }

  export let className;

  let results: Result[] = [];

  onMount(async () => {
    const method = 'getclassresults';
    const comp = '22636';
    const response = await fetch(
      [
        'https://liveresultat.orientering.se/api.php',
        [`method=${method}`, `comp=${comp}`, `class=${className}`].join('&')
      ].join('?')
    );

    ({ results } = await response.json());
  });
</script>

{#each results as { place, name, result }}
  <div>{place}) {name}, {result}</div>
{/each}
