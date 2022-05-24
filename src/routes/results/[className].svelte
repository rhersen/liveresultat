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
    const comp = '22637';
    const response = await fetch(
      [
        'https://liveresultat.orientering.se/api.php',
        [`method=${method}`, `comp=${comp}`, `class=${className}`].join('&')
      ].join('?')
    );

    ({ results } = await response.json());
  });
</script>

<h1>{className}</h1>

<div class="results">
  {#each results as { place, name, club, result }}
    <div>{place}</div>
    <div>
      <span>{name}</span>
      <span class="club">{club}</span>
    </div>
    <div class="result">{result}</div>
  {/each}
</div>

<style>
  h1 {
    font-family: sans-serif;
    text-align: center;
  }

  .results {
    font-family: sans-serif;
    display: grid;
    grid-template-columns: 8% auto 14%;
  }

  .club {
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
  }

  .result {
    justify-self: end;
  }
</style>
