const celsiusInput = document.getElementById("celsius");
const farenheitInput = document.getElementById("farenheit");
const kelvinInput = document.getElementById("kelvin");

function celsiusConversion() {
  const cTemp = parseFloat(celsiusInput.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;
  farenheitInput.value = fTemp.toFixed(2);
  kelvinInput.value = kTemp.toFixed(2);
}

function farenheitConversion() {
  const fTemp = parseFloat(farenheitInput.value);
  const cTemp = (fTemp - 32) * (5 / 9);
  const kTemp = ((fTemp + 459.67) * 5) / 9;
  celsiusInput.value = cTemp.toFixed(2);
  kelvinInput.value = kTemp.toFixed(2);
}

function kelvinConversion() {
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = (kTemp * 9) / 5 - 459.67;
  celsiusInput.value = cTemp.toFixed(2);
  farenheitInput.value = fTemp.toFixed(2);
}

celsiusInput.addEventListener("input", celsiusConversion);
farenheitInput.addEventListener("input", farenheitConversion);
kelvinInput.addEventListener("input", kelvinConversion);
