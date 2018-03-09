function computeWindChill() {
    // Input - get input
    var tempInput = document.getElementById("avgT").value;
    var speedInput = document.getElementById("windS").value;

    // Processing - f = 35.74 + 0.6215 * t - 35.75 * s^0.16 + 0.4275 * t s^0.16
    var t = parseInt(tempInput); // OK - parse string to number
    var s = parseInt(speedInput); // OK - parse string to number
    var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t) * Math.pow(s, 0.16);

    // Output - output to the div and round the number value to two decimal places
    document.getElementById("output").innerHTML = "The wind chill factor is <strong>" + f.toFixed(2) + "</strong>!";
}



