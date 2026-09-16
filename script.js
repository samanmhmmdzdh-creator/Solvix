// ========================================
// SOLVIX - Main JavaScript
// ========================================


// ----------------------------------------
// Open Calculator or Section
// ----------------------------------------

function openCalculator(type) {

    // Solution Preparation
    if (type === "solution-preparation") {

        window.location.href = "solution-preparation.html";

        return;
    }


    // Molarity
    if (type === "molarity") {

        window.location.href =
            "calculators/molarity.html";

        return;
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


    // Validate inputs

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


    // Molarity formula
    //
    // M = mass / molecular weight / volume

    const molarity =
        mass / molecularWeight / volume;


    // Show result

    result.textContent =
        `Molarity = ${molarity.toFixed(3)} M`;

}


// ----------------------------------------
// Go to Home
// ----------------------------------------

function goHome() {

    const currentPath =
        window.location.pathname;


    // If we are inside calculators folder

    if (
        currentPath.includes("/calculators/")
    ) {

        window.location.href =
            "../index.html";

        return;
    }


    // If we are on another page

    window.location.href =
        "index.html";

}
