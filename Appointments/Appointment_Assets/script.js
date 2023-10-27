$(document).ready(function () {

// CURRENT DATE

var todaysDate = document.querySelector("#current-date");
var time = dayjs().format("dddd, MMMM D, YYYY");

todaysDate.textContent = (time);

});


// HIDE/SHOW CARD

$(document).ready(function() {
  
  $('#bttn').click(function() {
    $('#appointmentOne').toggle();
  });

});


// ENTER NEW APPOINTMENT NAME, DATE, HOUR, LOCATION

const txt1 = document.getElementById('newAppointment');
const txt2 = document.getElementById('appointmentDay');
const txt3 = document.getElementById('appointmentHour')
const btn1 = document.getElementById('submitBttn');
const out1 = document.getElementById('output1');
const out2 = document.getElementById('output2');
const out3 = document.getElementById('output3');


function newAppointment() {
  out1.innerHTML = txt1.value;
  out2.innerHTML = txt2.value;
  out3.innerHTML = txt3.value;
}

btn1.addEventListener('click',newAppointment);