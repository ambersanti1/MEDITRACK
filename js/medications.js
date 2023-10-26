var today = dayjs();
$('#currentDay').text(today.format('MMMM D, YYYY'));

//Scrollable menu

var medicationForm = document.getElementById ("medication-form");


var addBtn = document.getElementById("add-medicine")

function unshow (){
  medicationForm.removeAttribute("class", "hide")
  hideShow()
}
addBtn.onclick = unshow;

var display = 1;
function hideShow() {

  if (display == 1) {
    medicationForm.style.display = "block";
    display = 0;
  } else {
    medicationForm.style.display = "none";
    display = 1;
  }
}

var medicineNameEl = document.querySelector(".medicine-name");
var diseaseEl = document.getElementById("disease");
var startHourEl = document.getElementById("start-hour");
var startDateEl = document.getElementById("start-date");
var frequencyEl = document.getElementById("frequency");
var durationEl = document.getElementById("duration");
var submitBtn = document.getElementById("submit");

var medicine = document.getElementById("medicine");

function addTake (event) {

  var medicineName = medicineNameEl.value;
  var disease = diseaseEl.value;
  var startHour = startHourEl.value;
  var startDate = startDateEl.value;
  var frequency = frequencyEl.value;
  var duration = durationEl.value;

  var addResult = {
    medicineName: medicineName,
    disease: disease,
    startHour: startHour,
    startDate: startDate,
    frequency: frequency,
    duration: duration,
    };
  
  if (medicineName && startHour && startDate && frequency && duration && disease !== ""){
    const stringObject = JSON.stringify(addResult)
    console.log(stringObject)
    localStorage.setItem("addResult", stringObject)
    const addResultsFromStorage = localStorage.getItem("addResult")
    const objectParsed = JSON.parse(addResultsFromStorage)
  }
  if (medicineName && startHour && startDate && frequency && duration && disease !== ""){
    event.preventDefault();
    const course = document.createElement('div');
    course.setAttribute("class", "course")
    const preview = document.createElement('div');
    preview.setAttribute("class", "preview")
    const elementoPadre = document.querySelector(".container-card")
    const day = document.createElement("h6")
    day.setAttribute("id", "day")
    const hour = document.createElement("h2")
    const info = document.createElement("div")
    info.setAttribute("class", "info")
    const progressWrapper = document.createElement("div")
    progressWrapper.setAttribute("class", "progress-wrapper")
    const progress = document.createElement("div")
    progress.setAttribute("class", "progress")
    const progressText= document.createElement("span")
    progressText.setAttribute("class", "progress-text")
    const newTake= document.createElement("h6")
    const medicine = document.createElement("h2")
    medicine.setAttribute("id", "medicine")
    const discomfort = document.createElement("p")
    discomfort.setAttribute("id", "discomfort")
    discomfort.setAttribute("class", "p-trunc")

    day.textContent = addResult.startDate
    hour.textContent = addResult.startHour
    progressText.textContent = "Takes"
    newTake.textContent = "New take"
    medicine.textContent = addResult.medicineName
    discomfort.textContent = addResult.disease
    elementoPadre.appendChild(course)
    course.append(preview, info)
    preview.append(day, hour)
    info.append(progressWrapper, newTake, medicine, discomfort)
    progressWrapper.append(progress, progressText)

    var formulario = document.getElementById("formulario")
    formulario.reset() 
  }
}
submitBtn.onclick = addTake;
