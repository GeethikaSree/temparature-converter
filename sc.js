function convertTemperature() {
    // Get input values
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');

    // Check if both inputs are filled
    if (celsiusInput.value !== '' && fahrenheitInput.value === '') {
        // Convert Celsius to Fahrenheit
        var celsiusValue = parseFloat(celsiusInput.value);
        var fahrenheitValue = (celsiusValue * 9/5) + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else if (fahrenheitInput.value !== '' && celsiusInput.value === '') {
        // Convert Fahrenheit to Celsius
        var fahrenheitValue = parseFloat(fahrenheitInput.value);
        var celsiusValue = (fahrenheitValue - 32) * 5/9;
        celsiusInput.value = celsiusValue.toFixed(2);
    } else {
        alert('Please enter a value in one of the fields.');
    }
}
