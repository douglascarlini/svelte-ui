<script lang="ts">
    import config from "../config";

    export let value: number = 0;
    export let color: string = config.theme.color.accent;

    let val = 0;
    let interval: any;

    $: {
        clearInterval(interval);
        if (val < value) {
            interval = setInterval(() => {
                if (val < value) {
                    val += 0.1 * (value - val);
                    if (val > 100) val = 100;
                    if (val < 0) val = 0;
                } else {
                    clearInterval(interval);
                }
            }, 20);
        } else if (val > value) {
            interval = setInterval(() => {
                if (val > value) {
                    val -= 0.1 * (value - val);
                    if (val > 100) val = 100;
                    if (val < 0) val = 0;
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
