<script lang="ts">
    export let rows: number = 5;
    export let value: string = "";
    export let label: string = "";
    export let placeholder: string = "";
</script>

<div>
    <div class="label">{label}</div>
    <textarea {placeholder} {rows}>{value}</textarea>
</div>

<style>
    .label {
        margin: 8px 0;
    }

    textarea {
        background-color: #eee;
        border-radius: 6px;
        padding: 12px;
        border: none;
        resize: none;
        width: 100%;
    }
</style>
