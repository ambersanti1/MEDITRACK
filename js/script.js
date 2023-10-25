var today = dayjs();
$('#currentDay').text(today.format('MMMM D, YYYY'));

//Scrollable menu

var medicationForm = document.getElementById ("medication-form");
var display = 0;

function hideShow() {
  if (display == 1) {
    medicationForm.style.display = "block";
    display = 0;
  } else {
    medicationForm.style.display = "none";
    display = 1;
  }
}

const form = document.querySelector("form");

form. addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  for (item of formData) {
    console.log(item[0], item[1])

  }

})
