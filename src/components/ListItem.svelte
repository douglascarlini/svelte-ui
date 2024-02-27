<script lang="ts">
    export let action: () => void;
</script>

<a href={"javascript:;"} class="container" on:click={action}>
    <slot />
</a>

<style>
    .container {
        text-decoration: none;
        border-radius: 4px;
        padding: 8px 12px;
        color: #555;
    }

    .container:hover {
        background-color: #eee;
    }
</style>
