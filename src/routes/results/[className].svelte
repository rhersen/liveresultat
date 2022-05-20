<script lang="ts">
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

  export let results: Result[];
</script>

{#each results as { place, name, result }}
  <div>{place}) {name}, {result}</div>
{/each}
