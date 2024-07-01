<script lang="ts">
    export let value: number = 0;
    export let color: string = "#333";
</script>

<div style="display: block; background-color: #eee; border-radius: 4px;">
    <div style="width: {value}%; height: 20px; display: flex; justify-content: center; align-items: center; background-color: {color}; border-radius: 4px; color: #fff; overflow: hidden; transition: width 0.5s ease-in-out;">{value.toFixed(1)}%</div>
</div>
