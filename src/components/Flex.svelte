<script lang="ts">
    export let size: number = 1;
</script>

<div style="flex: {size}; {$$props.style}">
    <slot />
</div>
