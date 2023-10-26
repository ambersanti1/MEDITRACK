
fetch('https://health-products.canada.ca/api/drug/drugproduct/?lang=en&type=json')

.then(function(response) {
  return response.json();
})
.then(function(Object) {
  console.log(Object);
})
.catch(function(error){
  console.error("ptm");
  console.error("error");
});