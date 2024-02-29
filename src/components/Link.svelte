<script lang="ts">
    export let action: () => void;
</script>

<a href={"javascript:;"} on:click={action} {...$$props}>
    <slot />
</a>
