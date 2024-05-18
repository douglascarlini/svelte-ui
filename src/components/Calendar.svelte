<script>
    let totalDays = 42;
    let today = new Date();
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    export let selectedDate = new Date();
    export let dayNames = ["D", "S", "T", "Q", "Q", "S", "S"];
    export let monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const isToday = (day) => today.getDate() === day && today.getMonth() === currentMonth && today.getFullYear() === currentYear;
    const selectDate = (day) => (selectedDate = new Date(currentYear, currentMonth, day));

    const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    let daysInMonth = getDaysInMonth(currentMonth, currentYear);
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    let prevMonthDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth;

    $: isSelected = (day) => {
        if (!selectedDate) return false;
        return selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear;
    };

    const prevMonth = () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    };

    const nextMonth = () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    };

    const updateCalendar = () => {
        daysInMonth = getDaysInMonth(currentMonth, currentYear);
        firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        prevMonthDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth;
    };

    const handleKeydown = (event, day) => {
        if (event.key === "Enter" || event.key === " ") {
            selectDate(day);
        }
    };

    import config from "../config";
</script>

<div class="calendar-container" style="--accent-color: {config.theme.color.accent}">
    <div class="month-title">
        <button on:click={prevMonth}><i class="fa fa-arrow-left" /></button>
        <span>{monthNames[currentMonth]} {currentYear}</span>
        <button on:click={nextMonth}><i class="fa fa-arrow-right" /></button>
    </div>

    <div class="calendar-header">
        {#each dayNames as dayName}
            <div>{dayName}</div>
        {/each}
    </div>

    <div class="calendar">
        <!-- Days from the previous month -->
        {#each Array(prevMonthDays)
            .fill()
            .map((_, index) => getDaysInMonth(currentMonth - 1, currentYear) - prevMonthDays + index + 1) as day}
            <div class="day out-of-month">
                {day}
            </div>
        {/each}

        <!-- Current month days -->
        {#each Array(daysInMonth).fill(0) as _, day}
            <div class="day {isToday(day + 1) ? 'today' : ''} {isSelected(day + 1) ? 'selected' : ''}" on:click={() => selectDate(day + 1)} on:keydown={(event) => handleKeydown(event, day + 1)} tabindex="0" role="button" aria-pressed={isSelected(day + 1) ? "true" : "false"}>{day + 1}</div>
        {/each}

        <!-- Next month days to fill the grid -->
        {#each Array(totalDays - daysInMonth - prevMonthDays)
            .fill()
            .map((_, index) => index + 1) as day}
            <div class="day out-of-month">{day}</div>
        {/each}
    </div>
</div>

<style>
    .calendar-container {
        text-align: center;
    }

    .calendar-header,
    .calendar {
        grid-template-columns: repeat(7, 1fr);
        display: grid;
        gap: 4px;
    }

    .calendar-header div,
    .day {
        justify-content: center;
        align-items: center;
        display: flex;
        padding: 4px;
    }

    .calendar-header div {
        font-weight: bold;
    }

    .day {
        background-color: #eee;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
        role: "button";
        tabindex: "0";
    }

    .day:hover {
        background-color: #ddd;
    }

    .today {
        background-color: #aaa;
        color: #fff;
    }

    .selected {
        background-color: var(--accent-color);
        color: white;
    }

    .month-title {
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2px;
        display: flex;
    }

    button {
        border-radius: 4px;
        padding: 6px 10px;
        cursor: pointer;
        border: none;
    }

    button:hover {
        background-color: #ddd;
    }

    .out-of-month {
        color: #ccc;
    }
</style>
