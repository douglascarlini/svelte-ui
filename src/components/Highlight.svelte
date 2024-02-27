<script lang="ts">
    import Expand from "./Expand.svelte";

    export let title: any = null;
    export let icon: any = null;
    export let text: string;

    import config from "../config";
</script>

<div class="card" style="--accent-color: {config.theme.color.accent}">
    <Expand>
        <div>
            <Expand>
                {#if icon}<i class="fa fa-{icon} color" style="margin-right: 12px;" />{/if}
                <div class="content">
                    {#if title}<p class="title">{title}</p>{/if}
                    {text}
                </div>
            </Expand>
        </div>
        <slot />
    </Expand>
</div>

<style>
    .title {
        font-weight: bold;
        color: #aaa;
    }

    .content {
        color: #777;
    }

    .color {
        color: var(--accent-color);
    }

    .card {
        border: 2px solid var(--accent-color);
        background-color: white;
        border-radius: 6px;
        padding: 12px 14px;
    }
</style>
