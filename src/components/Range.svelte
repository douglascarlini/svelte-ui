<script lang="ts">
    import config from "../config";

    export let min: number = 0;
    export let max: number = 100;
    export let label: string = "";
    export let value: number = min;

    const updateValue = (event: any) => {
        value = +event.target.value;
    };

    $: thumbPositionPercent = ((value - min) / (max - min)) * 100;
</script>

{#if label.length > 0}
    <div class="label-container">
        <span>{label}</span>
        <span>{value}</span>
    </div>
{/if}

<div class="container">
    <div class="range-slider">
        <input type="range" {min} {max} {value} on:input={updateValue} class="slider-range" style="background: linear-gradient(to right, {config.theme.color.accent} 0%, {config.theme.color.accent} {thumbPositionPercent}%, #ccc {thumbPositionPercent}%, #ccc 100%);" />
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
    }

    .label-container {
        justify-content: space-between;
        font-weight: normal;
        align-items: center;
        display: flex;
    }

    .range-slider {
        width: 100%;
        position: relative;
    }

    .slider-range {
        -webkit-appearance: none;
        width: 100%;
        height: 8px;
        background: transparent;
        cursor: pointer;
        outline: none;
        border-radius: 12px;
    }

    .slider-range::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 14px;
        height: 14px;
        background: white;
        cursor: pointer;
        border-radius: 50%;
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
    }

    .slider-range::-moz-range-thumb {
        width: 14px;
        height: 14px;
        background: white;
        cursor: pointer;
        border-radius: 50%;
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
    }
</style>
