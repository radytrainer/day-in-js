var dayOfTheWeek = () => {
    let days = new Date();
    let day = days.getDay();
    let displayDay = "";
    switch(day) {
        case 0:
            displayDay = "Sunday";
            break;
        case 1:
            displayDay = "Monday";
            break;
        case 2:
            displayDay = "Tuesday";
            break;
        case 3:
            displayDay = "Wednesday";
            break;
        case 4: 
            displayDay = "Thursday";
            break;
        case 5:
            displayDay = "Friday";
            break;
        case 6:
            displayDay = "Saturday";
            break;
    }
    document.getElementById("dater").innerHTML = displayDay;
}
setInterval(dayOfTheWeek, 1000);