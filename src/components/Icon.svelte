<script lang="ts">
    export let name: string;
    export let size: number = 14;
    export let group: string = "";
</script>

<i class="{group.length > 0 ? `fa-${group}` : 'fa'} fa-{name}" style="width:{size}px;" />
