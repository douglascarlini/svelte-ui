<script>
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }

    function getFirstDayOfMonth(month, year) {
        return new Date(year, month, 1).getDay();
    }

    $: daysInMonth = getDaysInMonth(currentMonth, currentYear);
    $: firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
</script>

<div class="calendar">
    <div class="calendar-header">
        <button>&lt;</button>
        <h2>{currentYear}-{currentMonth + 1}</h2>
        <button>&gt;</button>
    </div>
    <div class="calendar-body">
        {#each Array.from({ length: firstDayOfMonth }, (_, i) => i) as _}
            <div class="calendar-day"></div>
        {/each}
        {#each Array.from({ length: daysInMonth }, (_, i) => i + 1) as day}
            <div class="calendar-day">{day}</div>
        {/each}
    </div>
</div>

<style>
    /* Add your custom styles here */
    .calendar {
        max-width: 800px;
        margin: 0 auto;
    }

    .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .calendar-body {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-gap: 10px;
    }

    .calendar-day {
        padding: 10px;
        background-color: #f5f5f5;
        text-align: center;
    }
</style>
