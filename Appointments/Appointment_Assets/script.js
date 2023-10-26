$(document).ready(function () {

// CURRENT DATE

var todaysDate = document.querySelector("#current-date");
var time = dayjs().format("dddd, MMMM D, YYYY");

todaysDate.textContent = ('Date: ' + time);

});


// HIDE/SHOW CARD

$(document).ready(function() {
  
  $('#bttn').click(function() {
    $('#appointmentOne').toggle();
  });

});


// ENTER NEW APPOINTMENT

const txt1 = document.getElementById('newAppointment');
const btn1 = document.getElementById('submitBttn');
const out1 = document.getElementById('output1');

function newAppointment() {
  out1.innerHTML = txt1.value;
}

btn1.addEventListener('click',newAppointment);