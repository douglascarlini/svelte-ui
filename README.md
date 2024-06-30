# Svelte UI
Svelte UI TypeScript Component Kit.

> ⚠️  Under development.

## Installation

`npm i @dcarlini/svelte-ui`

## Usage

A basic example of use.

```svelte
<script lang="ts">
  import { Button } from "@dcarlini/svelte-ui";
</script>

<main>
  <Button>Button</Button>
</main>
```

### Tools

The kit contains some dynamic tools, like floating label.

```svelte
<script lang="ts">
  import { Center, Switch } from "@dcarlini/svelte-ui";
  import { hit } from "@dcarlini/svelte-ui/src/tools";

  let checked: boolean = false;
  let ref: HTMLElement;

  const spell = () => {
    hit(ref, {
      text: !checked ? "On" : "Off",
      icon: !checked ? "check" : "xmark",
      color: !checked ? "#009900" : "#990000",
    });
  };
</script>

<Center>
  <div bind:this={ref}>
    <Switch bind:checked action={spell} />
  </div>
</Center>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: monospace;
  }

  :global(html, body, #app) {
    height: 100%;
  }
</style>

```