<script lang="ts">
    import { onMount } from "svelte";

    export let show: boolean = false;
    export let padding: number = 10;
    export let close: () => void;

    onMount(() => {
        window.addEventListener("keydown", function esc(event) {
            if (event.key === "Escape") {
                show = false;
                close();
            }
        });
    });
</script>

{#if show}
    <div style="--padding: {padding}px;">
        <div class="backdrop" on:click={close} role="button" tabindex="0" on:keydown={() => {}}>
            <div class="container" on:click|stopPropagation role="button" tabindex="0" on:keydown={() => {}}>
                <button class="close" on:click={close}><i class="fa fa-close" /></button>
                <slot />
            </div>
        </div>
    </div>
{/if}

<style>
    .backdrop {
        background-color: rgba(0, 0, 0, 0.8);
        animation: fadeIn 0.3s ease;
        justify-content: center;
        align-items: center;
        position: fixed;
        display: flex;
        z-index: 999;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
    }

    .container {
        animation: slideIn 0.3s ease;
        background-color: white;
        padding: var(--padding);
        border-radius: 8px;
        margin: 20px;
    }

    .close {
        animation: fadeIn2 1s ease;
        position: absolute;
        background: none;
        font-size: 30px;
        cursor: pointer;
        border: none;
        color: #fff;
        right: 20px;
        top: 10px;
    }

    @keyframes fadeIn2 {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideIn {
        from {
            transform: translateY(-80px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>
