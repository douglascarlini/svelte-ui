<script lang="ts">
    export let gap: number = 6;
</script>

<div class="main" style="gap:{gap}px;">
    <slot />
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
    }
</style>
