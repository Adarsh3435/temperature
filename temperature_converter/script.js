function convertToCelsius() {
    const celsiusInput = document.getElementById('celsius-input');
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    const kelvinInput = document.getElementById('kelvin-input');
  
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    const kelvinValue = celsiusValue + 273.15;
  
    fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
    kelvinInput.value = isNaN(kelvinValue) ? '' : kelvinValue.toFixed(2);
  }
  
  function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius-input');
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    const kelvinInput = document.getElementById('kelvin-input');
  
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    const kelvinValue = (fahrenheitValue + 459.67) * 5/9;
  
    celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
    kelvinInput.value = isNaN(kelvinValue) ? '' : kelvinValue.toFixed(2);
  }
  
  function convertToKelvinFromCelsius() {
    const celsiusInput = document.getElementById('celsius-input');
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    const kelvinInput = document.getElementById('kelvin-input');
  
    const celsiusValue = parseFloat(celsiusInput.value);
    const kelvinValue = celsiusValue + 273.15;
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
  
    kelvinInput.value = isNaN(kelvinValue) ? '' : kelvinValue.toFixed(2);
    fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
  }
  
  function convertToCelsiusFromKelvin() {
    const celsiusInput = document.getElementById('celsius-input');
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    const kelvinInput = document.getElementById('kelvin-input');
  
    const kelvinValue = parseFloat(kelvinInput.value);
    const celsiusValue = kelvinValue - 273.15;
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
  
    celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
    fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
  }
  
  function convertToKelvinFromFahrenheit() {
    const celsiusInput = document.getElementById('celsius-input');
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    const kelvinInput = document.getElementById('kelvin-input');
  
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const kelvinValue = (fahrenheitValue + 459.67) * 5/9;
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
  
    kelvinInput.value = isNaN(kelvinValue) ? '' : kelvinValue.toFixed(2);
    celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
  }
  
  function convertToFahrenheitFromKelvin() {
    const celsiusInput = document.getElementById('celsius-input');
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    const kelvinInput = document.getElementById('kelvin-input');
  
    const kelvinValue = parseFloat(kelvinInput.value);
    const fahrenheitValue = (kelvinValue * 9/5) - 459.67;
    const celsiusValue = kelvinValue - 273.15;
  
    fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
    celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
  }
  