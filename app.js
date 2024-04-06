const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const timeUpdate = document.querySelector('.time-update');
const h3heading = document.querySelectorAll('.heading');
const boxContainr = document.querySelector('.box-containeer');

let temp = new Date();
let tempyear = temp.getFullYear();
let tempMonth = temp.getMonth();
let tempMin = temp.getMinutes();
let tempDay = temp.getDate();
let tempHours = temp.getHours();

// let time = new Date(2024, 0, 31, 17, 30, 0);
let time = new Date(tempyear, tempMonth, tempDay + 7, tempHours, tempMin, 0)
// console.log(time);
const year = time.getFullYear();
const hours = time.getHours();
const minutes = time.getMinutes();
const date = time.getDate();
let month = time.getMonth();
month = months[month];
let weekday = time.getDay();
weekday = weekdays[weekday];
timeUpdate.textContent = `Giveaway Ends On ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}AM`

const futureTime = time.getTime();

// 1s = 1000ms;
// 1m = 60s;
// 1hour = 60min;
// 1 day = 24hour;

function calculateRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    let oneDay = 24 * 60 * 60 * 1000;
    let oneHours = 60 * 60 * 1000;
    let oneMin = 60 * 1000;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHours);
    let min = Math.floor((t % oneHours) / oneMin);
    let sec = Math.floor((t % oneMin) / 1000);


    const arr = [days, hours, min, sec];

    function format(x) {
        if (x < 10) {
            return (x = `0${x}`);
        }
        return x;
    }

    h3heading.forEach(function (items, ind) {
        items.textContent = format(arr[ind]);
    })

    if (t < 0) {
        clearInterval(count);
        boxContainr.innerHTML = ` <h3>Sorry you missed it</h3>`
    }
}

let count = setInterval(calculateRemainingTime, 1000)

calculateRemainingTime();