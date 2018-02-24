/*Get day of week*/
    var wd = new Date();
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    var n = weekday[wd.getDay()];

/*Get month*/

    var m = new Date();
    var month = new Array(11);
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

    var p = month[m.getMonth()];

/*Get date*/
    var d = new Date();
    var day = d.getDate();

/*Get year*/
    var y = new Date();
    var year = y.getFullYear();

/*Display Date*/
document.getElementById("currentdate").innerHTML = n + ", " + day + " " + p + " " + year;
