// switch / reverse
document.getElementById("toggle").addEventListener("change", function () {
  let isFahrenheit = this.checked;

  document
    .querySelectorAll(".temp")
    .forEach((el) => el.classList.remove("active"));

  if (isFahrenheit) {
    document.getElementById("input-fahrenheit").classList.add("active");
    document.getElementById("result-celsius").classList.add("active");
    document.getElementById("conversion-celsius").classList.add("active");
    document.getElementById("convertFahrenheit").classList.add("active");
    document.getElementById("fahrenheitToCelsius").classList.add("active");
  } else {
    document.getElementById("input-celsius").classList.add("active");
    document.getElementById("result-fahrenheit").classList.add("active");
    document.getElementById("conversion-fahrenheit").classList.add("active");
    document.getElementById("convertCelsius").classList.add("active");
    document.getElementById("celsiusToFahrenheit").classList.add("active");
  }
});

// Fungsi Konversi
document.getElementById("convertBtn").addEventListener("click", function () {
  let isFahrenheit = document.getElementById("toggle").checked;
  let inputCelsius = document.getElementById("main-input-celsius");
  let inputFahrenheit = document.getElementById("main-input-fahrenheit");
  let resultCelsius = document.getElementById("main-result-celsius");
  let resultFahrenheit = document.getElementById("main-result-fahrenheit");

  if (isFahrenheit) {
    let fahrenheitValue = parseFloat(inputFahrenheit.value);
    if (!isNaN(fahrenheitValue)) {
      let convertedValue = ((fahrenheitValue - 32) * 5) / 9;
      resultCelsius.value = convertedValue.toFixed();
    } else {
      resultCelsius.value = "Invalid Input";
    }
  } else {
    let celsiusValue = parseFloat(inputCelsius.value);
    if (!isNaN(celsiusValue)) {
      let convertedValue = (celsiusValue * 9) / 5 + 32;
      resultFahrenheit.value = convertedValue.toFixed();
    } else {
      resultFahrenheit.value = "Invalid Input";
    }
  }
});

// Reset Form
document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("main-input-celsius").value = "";
  document.getElementById("main-input-fahrenheit").value = "";
  document.getElementById("main-result-celsius").value = "";
  document.getElementById("main-result-fahrenheit").value = "";
});
