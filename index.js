class Converter {
  constructor(celsius, farenheit, kelvin) {
    this.celsius = celsius;
    this.farenheit = farenheit;
    this.kelvin = kelvin;
  }
}

//Listen for submit
document.getElementById("temp-form").addEventListener("submit", function(e) {
  setTimeout(convert, 1000);

  e.preventDefault();
});

//listen for clear
document.getElementById("clear-values").addEventListener("click", function(e) {
  document.getElementById("celsius").value = "";
  document.getElementById("farenheit").value = "";
  document.getElementById("kelvin").value = "";
  e.preventDefault();
});

//convert the values
function convert() {
  console.log("Calculating...");

  let celsisus = document.getElementById("celsius").value;
  let farenheit = document.getElementById("farenheit").value;
  let kelvin = document.getElementById("kelvin").value;

  if (document.getElementById("celsius").value != "");
  {
    //convert Celsisus to Farenheit
    farenheit = (parseFloat(celsisus) * 9) / 5 + 32;
    document.getElementById("farenheit").value = farenheit;

    //convert Celsisus to Kelvin
    kelvin = parseFloat(celsisus) + 273.15;
    document.getElementById("kelvin").value = kelvin;
  }
  if (document.getElementById("farenheit") != "");
  {
    //convert Farenheit to celsisus
    celsisus = ((parseFloat(farenheit) - 32) * 5) / 9;
    document.getElementById("celsius").value = celsius;

    //convert Farenheit to kelvin
    kelvin = (parseFloat(farenheit) + 459.67) * (5 / 9);
    document.getElementById("kelvin").value = kelvin;
  }
  if (document.getElementById("kelvin") != "");
  {
    //convert Kelvin to Celsisus
    celsisus = parseFloat(kelvin).value - 273.15;
    document.getElementById("celsius").value = celsisus;

    //convert Kelvin to Farenheit
    farenheit = (parseFloat(kelvin).value * 9) / 5 - 459.67;
    document.getElementById("farenheit").value = farenheit;
  }
}

// Conversion from Celsius to Farenheit
// Multiply by 9, then divide by 5, then add 32

//celsisus to kelvin
// celsius plus 273.15

//Farenheit to celsisus
// Deduct 32, then multiply by 5, then divide by 9

// Farenheit to kelvin
// (farenheit + 459.67) + 5/9

// Kelvin to Fahrenheit
// kelvin times 9/5  - 459.67

// kelvin to celsisus
// kelvin - 273.15
