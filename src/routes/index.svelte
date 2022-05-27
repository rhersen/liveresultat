<script lang="ts">
  export let competitions;
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
