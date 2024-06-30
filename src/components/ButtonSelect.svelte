<script lang="ts">
    import FlexRow from "./FlexRow.svelte";
    import FlexCol from "./FlexCol.svelte";
    import Button from "./Button.svelte";
    import Flex from "./Flex.svelte";

    export let cols: number = 4;
    export let icon: any = null;
    export let label: any = null;
    export let items: any[] = [];
    export let selected: any = null;

    const chunk = (array: any[], size: number) => Array.from({ length: Math.ceil(array.length / size) }, (_, i) => array.slice(i * size, i * size + size));
</script>

{#if label}
    <div style="padding: 0 0 12px 0;">
        {icon ? `<i class="fa fa-${icon}" />` : ""}
        {label}
    </div>
{/if}

<FlexCol>
    {#each chunk(items, cols) as c}
        <FlexRow>
            {#each c as i}
                <Flex><Button fit outline={selected != i} action={() => (selected = i)}>{i.label}</Button></Flex>
            {/each}
        </FlexRow>
    {/each}
</FlexCol>
