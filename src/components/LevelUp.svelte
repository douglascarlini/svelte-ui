<script lang="ts">
    export let text: any;
    export let icon: any = null;
    export let size: number = 14;
    export let color: string = "#333";
    export let duration: number = 2000;
    export let randomize: any = { position: false, direction: false, speed: false };

    let live: boolean = true;
    const die = () => (live = false);
    const r = (num = 10) => -num + Math.round(Math.random() * (num * 2));
</script>

{#if live}
    <div class="floating-text" on:animationend={die} style="--duration: {duration}ms; background-color: {color}; {randomize.position ? `margin: ${r()}px ${r()}px ${r()}px ${r()}px;` : ''}">
        <div style="font-size: {size}px; display: flex; align-items: center; justify-content: between;">
            {#if icon}
                <i class="fa fa-{icon}" style="font-size: 90%; margin-top: -2px;" />
                <span>&nbsp;</span>
            {/if}
            <span>{text}</span>
        </div>
    </div>
{/if}

<style>
    .floating-text {
        color: #fff;
        padding: 4px 6px;
        border-radius: 6px;
        animation: anim var(--duration) ease-out forwards;
    }

    @keyframes anim {
        0% {
            opacity: 0;
            transform: translateY(0);
        }
        10% {
            opacity: 1;
            transform: translateY(-10px);
        }
        90% {
            opacity: 1;
            transform: translateY(-15px);
        }
        100% {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
</style>
