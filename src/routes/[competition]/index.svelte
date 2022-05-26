<script lang="ts">
  interface Classes {
    status: string;
    classes: { className: string }[];
    hash: string;
  }

  export let classes: Classes;
  export let competition;
</script>

<h1>[competition name]</h1>
<h2>[date]</h2>

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
