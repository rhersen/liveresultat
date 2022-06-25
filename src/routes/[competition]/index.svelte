<script lang="ts">
  import { onMount } from 'svelte';

  export const prerender = false;

  export let classes = [];
  export let competition;

  onMount(async () => {
    console.log('onMount');
    const response = await fetch(
      `https://liveresultat.orientering.se/api.php?method=getclasses&comp=${competition}`
    );

    ({ classes } = await response.json());
  });
</script>

<h1>{classes.length} classes</h1>
{#each classes as { className }}
  <div class="links">
    <a href="{competition}/{className}">{className}</a>
  </div>
{/each}

<style>
  * {
    font-family: sans-serif;
  }

  .links {
    margin: 8px;
  }

  div a {
    font-size: 20px;
  }
</style>
