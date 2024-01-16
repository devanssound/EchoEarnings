# Scripts\OutputHandler.ps1
# This script is responsible for formatting and displaying the results.

function Show-Results {
    param (
        [string]$results
    )

    Write-Host $results
}

    # Future Enhancement:
    # This function can be expanded to include more sophisticated formatting
    # or even exporting results to a file or different output medium.