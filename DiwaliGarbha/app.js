function register() {
  // Get the values from the input fields
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var age = parseInt(document.getElementById("age").value);
  var email = document.getElementById("email").value;

  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // clear old output

  // Check for age eligibility
  if (age < 16) {
    outputDiv.innerHTML = "<p class='notice'>Sorry  " + name + 
      ", the event is not for participants below 16 years.</p>";
    return;
  }

  // Determine hall based on age
  var hall = "";
  if (age >= 16 && age <= 25) hall = "Hall 1";
  else if (age > 25 && age <= 35) hall = "Hall 2";
  else if (age > 35 && age <= 70) hall = "Hall 3";
  else hall = "Hall 4";

  // Create table to display results
  var table = "<table>" +
    "<tr><td><strong>Name</strong></td><td>" + name + "</td></tr>" +
    "<tr><td><strong>Phone</strong></td><td>" + phone + "</td></tr>" +
    "<tr><td><strong>Age</strong></td><td>" + age + "</td></tr>" +
    "<tr><td><strong>Assigned Hall</strong></td><td>" + hall + "</td></tr>" +
    "</table>";

  // Show the table
  outputDiv.innerHTML = table;

  // Clear the form
  document.getElementById("garbhaForm").reset();
}
