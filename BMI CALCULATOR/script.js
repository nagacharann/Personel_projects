/*function calculate() {
  var bmi;
  var result = document.getElementById("result");

  var height = parseInt(document.getElementById("height").value);

  var weight = parseInt(document.getElementById("weight").value);

  document.getElementById("w-val").textContent = weight + " kg";
  document.getElementById("h-val").textContent = height + " cm";

  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);

  result.textContent = bmi;

  if (bmi < 18.5) {
    category = "Underweight";
    result.style.color = "#ffc44d";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal Weight ";
    result.style.color = "#0be881";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight ";
    result.style.color = "#ff884d";
  } else {
    category = "Obese";
    result.style.color = "#ff5e57";
  }

  document.getElementById("category").textContent = category;
}*/

function calculate() {
  var bmi;
  var result = document.querySelector("#result");
  var weight = parseInt(document.querySelector("#weight").value);
  var height = parseInt(document.querySelector("#height").value);

  document.getElementById("w-val").textContent = weight + " kg";
  document.getElementById("h-val").textContent = height + " cm";
  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  result.textContent = bmi;
  if (bmi < 18.5) {
    document.getElementById("category").innerText = "Underweight 😒"; //took emojis reference from html emojis
    result.style.color = "#ffc44d";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById("category").innerText = "Normal Weight 🥰";
    result.style.color = "green";
  } else if (bmi > 24.9 && bmi <= 29.9) {
    document.getElementById("category").innerText = "Overweight 😮";
    result.style.color = "#FFA500";
  } else {
    document.getElementById("category").innerText = "Obese 😱";
    result.style.color = "red";
  }
}
