// inputHandler.js - Handles user input for the EchoEarnings Web App

function handleFormInput() {
    const incomeType = document.getElementById('incomeType').value;
    const incomeValue = parseFloat(document.getElementById('incomeValue').value);

    let isValid = true;
    let errorMessage = "";

    if (isNaN(incomeValue) || incomeValue <= 0) {
        isValid = false;
        errorMessage = "Please enter a valid number greater than zero.";
    }

    return { isValid, incomeType, incomeValue, errorMessage };
}
