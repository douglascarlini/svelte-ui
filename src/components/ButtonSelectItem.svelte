<script lang="ts">
    import FlexRow from "./FlexRow.svelte";
    import FlexCol from "./FlexCol.svelte";
    import Button from "./Button.svelte";
    import Flex from "./Flex.svelte";

    interface SelectItem {
        label: string;
        value: any;
    }

    export let cols: number = 4;
    export let icon: any = null;
    export let label: any = null;
    export let items: SelectItem[] = [];
    export let selected: SelectItem = null;

    const chunk = (array: number[], size: number) => Array.from({ length: Math.ceil(array.length / size) }, (_, i) => array.slice(i * size, i * size + size));
</script>

{#if label}
    <div style="padding: 0 0 12px 0;">
        {icon ? `<i class="fa fa-${icon}" />` : ""}
        {label}
    </div>
{/if}

<FlexCol>
    {#each chunk(items, cols) as row}
        <FlexRow>
            {#each row as item}
                <Flex><Button fit outline={selected != item} action={() => (selected = item)}>{item.label}</Button></Flex>
            {/each}
        </FlexRow>
    {/each}
</FlexCol>
