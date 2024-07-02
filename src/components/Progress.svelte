<script lang="ts">
    export let value: number = 0;
    export let color: string = "#333";

    let val = 0;
    let interval: any;

    $: {
        clearInterval(interval);
        if (val < value) {
            interval = setInterval(() => {
                if (val < value) {
                    val += 0.1 * (value - val);
                } else {
                    clearInterval(interval);
                }
            }, 20);
        } else if (val > value) {
            interval = setInterval(() => {
                if (val > value) {
                    val -= 0.1 * (value - val);
                } else {
                    clearInterval(interval);
                }
            }, 20);
        }
    }
</script>

<div style="display: block; background-color: #eee; border-radius: 4px;">
    <div style="width: {Math.round(val)}%; height: 20px; display: flex; justify-content: center; align-items: center; background-color: {color}; border-radius: 4px; color: #fff; overflow: hidden; transition: width 0.2s ease-in-out;">{val.toFixed(1)}%</div>
</div>
