
function setInput(event){
  event.preventDefault()
  const patientID = document.getElementById("patient-id").value
  const firstName = document.getElementById("first-name").value
  const lastName = document.getElementById("last-name").value
  const dateBirth = document.getElementById("date-birth").value
  var inp = {
  patientID: patientID,
  firstName: firstName,
  lastName: lastName,
  dateBirth: dateBirth,
  };
  var inputRegister = JSON.parse(localStorage.getItem('inputRegister')) || []; 
  inputRegister.push(inp);
  localStorage.setItem('inputRegister', JSON.stringify(inputRegister));
  JSON.parse(localStorage.getItem('inputRegister')) || [];
  console.log(inputRegister)
  location.href = 'profile.html';
  var inpPatient = document.getElementById("inp-patient")
  var inpFirstName = document.getElementById("inp-firstname")
  var inpLastName = document.getElementById("inp-lastname")
  var inpBirth = document.getElementById("inp-birth")

  inpPatient.textContent = "hola"
}

const submitBtn = document.getElementById("search")
submitBtn.onclick= setInput