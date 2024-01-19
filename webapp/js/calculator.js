// calculator.js - Script for handling wage and salary calculations in EchoEarnings Web App

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the form submission
    const form = document.getElementById('earningsForm');
    form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Extract values from the form inputs
    const incomeType = document.getElementById('incomeType').value;
    const incomeValue = parseFloat(document.getElementById('incomeValue').value);

    // Validate the input value
    if (!incomeValue) {
        updateResults('Please enter a valid number.');
        return;
    }

    // Perform calculations based on the income type
    const results = calculateEarnings(incomeType, incomeValue);

    // Display the results
    updateResults(results);
}

function calculateEarnings(type, value) {
    // Placeholder for the calculation logic
    // Replace with actual calculation logic from your PowerShell script
    let results = "";

    if (type === 'hourly') {
        // Assuming a simple calculation for hourly wage to annual salary
        const annualSalary = value * 2080; // 40 hours/week, 52 weeks/year
        results = `Annual salary based on hourly wage: $${annualSalary.toFixed(2)}`;
    } else if (type === 'salary') {
        // Additional logic for salary can be added here
        results = `Calculation for annual salary: $${value.toFixed(2)}`;
    }

    return results;
}

function updateResults(message) {
    // Update the results section in the HTML with the provided message
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = message;
}

// Additional integration with inputHandler.js and outputHandler.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('earningsForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const { isValid, incomeType, incomeValue, errorMessage } = handleFormInput();

        if (!isValid) {
            displayErrorMessage(errorMessage);
            return;
        }

        const results = calculateEarnings(incomeType, incomeValue);
        updateResults(results);
    });
});

// Assuming handleFormInput and displayErrorMessage are defined in inputHandler.js and outputHandler.js
