$(document).ready(function () {

// CURRENT DATE

var todaysDate = document.querySelector("#current-date");
var time = dayjs().format("dddd, MMMM D, YYYY");

todaysDate.textContent = ('Date: ' + time);

});


