<script lang="ts">
    import spinner from "../assets/img/spinner.svg";

    export let disabled: boolean = false;
    export let outline: boolean = false;
    export let loading: boolean = false;
    export let accent: boolean = false;
    export let fit: boolean = false;
    export let icon: string = "";
    export let action = () => {};

    import config from "../config";
</script>

<div style="--accent-color: {accent ? config.theme.color.accent : '#333'};">
    {#if loading}
        <div class="loader">
            <img alt="Loading" src={spinner} style="width: 24px; opacity: .4;" />
        </div>
    {:else}
        <button on:click={disabled || loading ? () => {} : action} class="{outline ? 'outline' : 'normal'} {disabled ? 'disabled' : ''}" style={fit ? "width:100%;" : ""}>
            {#if icon.length > 0}<i class="fa fa-{icon}" />{/if}
            <slot />
        </button>
    {/if}
</div>

<style>
    .loader {
        background-color: #eee;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        display: flex;
        padding: 6px;
    }

    button {
        border: 1px solid var(--accent-color);
        border-radius: 4px;
        padding: 8px 12px;
        cursor: pointer;
    }

    .normal {
        background-color: var(--accent-color);
        border: 1px solid var(--accent-color);
        color: #fff;
    }

    .normal:hover {
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .outline {
        border: 1px solid var(--accent-color);
        background-color: #fff;
        color: var(--accent-color);
    }

    .outline:hover {
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .disabled,
    .disabled:hover {
        border-color: transparent;
        background-color: #ddd;
        cursor: not-allowed;
        color: #999;
    }
</style>
