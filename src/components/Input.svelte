<script lang="ts">
    import config from "../config";

    export let value: any;
    export let icon: string;
    export let feedback: any;

    $: color = feedback ? config.theme.color[feedback.type] : { fg: "#fff", bg: "#000" };
    $: fbIcon = feedback ? (feedback.type == "info" ? "info-circle" : feedback.type == "warning" ? "warning" : feedback.type == "success" ? "check" : feedback.type == "error" ? "x" : "") : "";
</script>

<div class="container" style="--fg: {color.fg}; --bg: {color.bg}; --margin: {icon ? 36 : 14}px">
    <div>
        {#if icon}
            <i class="fa fa-{icon} icon" />
        {/if}
        <input bind:value {...$$props} />
    </div>
    {#if feedback && feedback.text.length > 0}
        <div class="feedback">
            {#if fbIcon.length}
                <i class="fa fa-{fbIcon}" />
                &nbsp;
            {/if}
            <span>{feedback.text}</span>
        </div>
    {/if}
</div>

<style>
    .icon {
        position: absolute;
        padding: 12px;
        opacity: 0.2;
    }

    .container {
        padding: 6px 0;
    }

    input {
        padding: 12px 14px 12px var(--margin);
        background-color: #eee;
        border-radius: 4px;
        border: none;
        color: #555;
        width: 100%;
    }

    .feedback {
        background-color: var(--bg);
        align-items: center;
        border-radius: 4px;
        margin: 4px 0 0 0;
        padding: 4px 7px;
        color: var(--fg);
        font-size: 80%;
        display: flex;
    }
</style>
