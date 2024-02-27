<script lang="ts">
    import FlexRow from "./FlexRow.svelte";
    import FlexCol from "./FlexCol.svelte";
    import Button from "./Button.svelte";
    import Flex from "./Flex.svelte";

    export let cols: number = 4;
    export let items: any[] = [];
    export let selected: any[] = [];

    const swap = (i: number) => (selected.includes(i) ? (selected = selected.filter((a) => a !== i)) : (selected = [...selected, i]));
    const chunk = (array: number[], size: number) => Array.from({ length: Math.ceil(array.length / size) }, (_, i) => array.slice(i * size, i * size + size));
</script>

<FlexCol>
    {#each chunk(items, cols) as c}
        <FlexRow>
            {#each c as i}
                <Flex><Button fit outline={!selected.includes(i)} action={() => swap(i)}>{i}</Button></Flex>
            {/each}
        </FlexRow>
    {/each}
</FlexCol>
