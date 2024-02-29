<script lang="ts">
    import config from "../config";

    export let label: string = "";
    export let action: () => void;
    export let checked: boolean = false;
    export let disabled: boolean = false;
    export const toggle = () => (disabled ? null : (checked = !checked));

    const onClickHandleEvent = () => {
        if (action) action();
        toggle();
    };
</script>

<div class="container" style="--bg-active: {config.theme.color.accent}; opacity:{disabled ? 0.5 : 1};" {...$$props}>
    {#if label.length > 0}
        <div class="label-container">
            <span>{label}</span>
        </div>
    {/if}
    <a href={"javascript:;"} class="switch" on:click={onClickHandleEvent} style="display: inline-block;">
        <input type="checkbox" bind:checked {disabled} class="sr-only" />
        <span class="slider {checked ? 'bg-active' : 'bg-inactive'}"></span>
    </a>
    <slot />
</div>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .label-container {
        font-weight: normal;
    }

    .bg-disabled {
        background-color: #777;
    }

    .bg-inactive {
        background-color: #ccc;
    }

    .bg-active {
        background-color: var(--bg-active);
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 36px;
        height: 22px;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: 0.2s;
        border-radius: 22px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 14px;
        width: 14px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.2s;
        border-radius: 50%;
    }

    input:checked + .slider:before {
        transform: translateX(14px);
    }

    .sr-only {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
</style>
