<script lang="ts">
    export let gap: number = 6;
</script>

<div class="container {$$props.class}" style="gap:{gap}px;{$$props.style}">
    <slot />
</div>

<style>
    .container {
        display: flex;
        align-items: stretch;
    }
</style>
