<script lang="ts">
    import config from "../config";

    export let text: any;
    export let icon: any = null;
    export let size: number = 14;
    export let duration: number = 2000;
    export let color: string = config.theme.color.accent;
    export let randomize: any = { position: false, direction: false, speed: false };

    let live: boolean = true;
    const die = () => (live = false);
    const r = (num = 10) => -num + Math.round(Math.random() * (num * 2));
</script>

{#if live}
    <div class="container" on:animationend={die} style="--duration: {duration}ms; background-color: {color};">
        <div class="content" style="font-size: {size}px;">
            {#if icon}
                <i class="fa fa-{icon}"></i>
            {/if}
            <span>{text}</span>
        </div>
    </div>
{/if}

<style>
    i {
        margin-top: -2px;
        margin-right: 4px;
    }

    .container {
        color: #fff;
        padding: 4px 6px;
        border-radius: 6px;
        animation: anim var(--duration) ease-out forwards;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: between;
    }

    @keyframes anim {
        0% {
            opacity: 0;
            transform: translateY(0) scale(0);
        }
        10% {
            opacity: 1;
            transform: translateY(0);
        }
        90% {
            opacity: 1;
            transform: translateY(-10px);
        }
        100% {
            opacity: 0;
            transform: translateY(-15px) scale(1.5);
        }
    }
</style>
