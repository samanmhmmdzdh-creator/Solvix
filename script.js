// ========================================
// SOLVIX - Main JavaScript
// ========================================


// ----------------------------------------
// Open Calculator / Section
// ----------------------------------------

function openCalculator(type) {

    if (type === "solution-preparation") {

        window.location.href = "solution-preparation.html";

    }


    else if (type === "molarity") {

        window.location.href =
            "calculators/molarity.html";

    }

}


// ----------------------------------------
// Molarity Calculator
// ----------------------------------------

function calculateMolarity() {

    const mass =
        parseFloat(
            document.getElementById("mass").value
        );

    const molecularWeight =
        parseFloat(
            document.getElementById("molecularWeight").value
        );

    const volume =
        parseFloat(
            document.getElementById("volume").value
        );

    const result =
        document.getElementById("result");


    // Validate input

    if (
        isNaN(mass) ||
        isNaN(molecularWeight) ||
        isNaN(volume) ||
        mass <= 0 ||
        molecularWeight <= 0 ||
        volume <= 0
    ) {

        result.textContent =
            "Please enter valid values.";

        return;

    }


    // Molarity calculation

    const molarity =
        mass / molecularWeight / volume;


    // Display result

    result.textContent =
        `Molarity = ${molarity.toFixed(3)} M`;

}


// ----------------------------------------
// Go Home
// ----------------------------------------

function goHome() {

    window.location.href =
        "index.html";

}
