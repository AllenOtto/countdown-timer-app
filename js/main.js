const birthDay = "28 Sep 2023";

function countdown() {
    const birthDate = new Date(birthDay);
    const currentDate = new Date();

    let daysLeft = ((birthDate - currentDate) / (1000 * 3600 * 24));
    let fractionOfADayLeft = daysLeft - Math.floor(daysLeft);
    let fullDaysLeft = Math.floor(daysLeft); // For display
    let hoursLeft = fractionOfADayLeft * 24;
    let fractionOfAnHourLeft = hoursLeft - Math.floor(hoursLeft);
    let fullHoursLeft = Math.floor(hoursLeft); // For display
    let minutesLeft = fractionOfAnHourLeft * 60;
    let fractionOfAMinuteLeft = minutesLeft - Math.floor(minutesLeft);
    let fullMinutesLeft = Math.floor(minutesLeft); // For display
    let secondsLeft = fractionOfAMinuteLeft * 60;
    // let fractionOfASecondLeft = secondsLeft - Math.floor(secondsLeft);
    let fullSecondsLeft = Math.floor(secondsLeft); // For display

    // Format time display
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    // Formatting time
    fullDaysLeft = formatTime(fullDaysLeft);
    fullHoursLeft = formatTime(fullHoursLeft);
    fullMinutesLeft = formatTime(fullMinutesLeft);
    fullSecondsLeft = formatTime(fullSecondsLeft);

    // Display in the DOM
    document.querySelector('.countdown-to b').textContent = `Shooting For ${birthDay}`;
    document.querySelector('.days-c .big-text').textContent = fullDaysLeft;
    document.querySelector('.hours-c .big-text').textContent = fullHoursLeft;
    document.querySelector('.minutes-c .big-text').textContent = fullMinutesLeft;
    document.querySelector('.seconds-c .big-text').textContent = fullSecondsLeft;


    // console.log(`${daysLeft} days`);
    // console.log(`${fullDaysLeft} days for countdown`);
    // console.log(`${fractionOfADayLeft} of a day left`);
    // console.log(`${hoursLeftInTheDay} hours`);
    // console.log(`${fullHoursLeft} hours for countdown`);
    // console.log(`${fractionOfAnHourLeft} of an hour left`);
    // console.log(`${minutesLeftInTheHour} minutes`);
    // console.log(`${fractionOfMinuteLeft} of an minute left`);
    // console.log(`${fullMinutesLeft} minutes for countdown`);
    // console.log(`${secondsLeft} seconds`);
    // console.log(`${fractionOfSecondLeft} of a second left`);
    // console.log(`${fullSecondsLeft} seconds for countdown`);
}

// Call countdown function every 1 second
setInterval(countdown, 1000);