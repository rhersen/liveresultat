<script lang="ts">
  import type { Competition } from '../types';

  export let competitions: Competition;
</script>

<ol>
  {#each competitions as { name, id, date }}
    <li>
      <a href={id}>{name}</a>
    </li>
  {/each}
</ol>

<style>
  * {
    font-family: sans-serif;
  }
</style>
