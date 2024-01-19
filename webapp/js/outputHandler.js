// outputHandler.js - Manages the display of results and messages

function updateResults(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = message;
}

function displayErrorMessage(message) {
    // Additional functionality for displaying error messages, if needed
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block'; // Assuming there's an error div
}
