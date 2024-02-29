<script lang="ts">
    export let size: number = 16;
    export let style: string = "";
    export let bold: boolean = false;
</script>

<div style="font-size: {size}px; font-weight: {bold ? 'bold' : 'normal'}; {style}">
    <slot />
</div>
