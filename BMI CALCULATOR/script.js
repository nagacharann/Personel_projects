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
    document.getElementById("category").innerText = "Under Weight 😒"; //took emojis reference from html emojis
    result.style.color = "#ffc44d";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById("category").innerText = "Normal Weight 🥰";
    result.style.color = "green";
  } else if (bmi > 24.9 && bmi <= 29.9) {
    document.getElementById("category").innerText = "Over Weight 😮";
    result.style.color = "#FFA500";
  } else {
    document.getElementById("category").innerText = "Obese 😱";
    result.style.color = "red";
  }
}
