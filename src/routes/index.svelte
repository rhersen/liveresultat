<script lang="ts">
  interface Classes {
    status: string;
    classes: { className: string }[];
    hash: string;
  }

  export let classes: Classes;
</script>

<h1>SCC E1 Södra station</h1>
<h2>2022-05-18</h2>

{#each classes as { className }}
  <div class="links">
    <a href="results/{className}">{className}</a>
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
