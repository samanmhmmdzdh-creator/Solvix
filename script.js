// ========================================
// SOLVIX - Main JavaScript
// ========================================


// ----------------------------------------
// Open Calculator or Section
// ----------------------------------------

function openCalculator(type) {

    // Solution Preparation
    if (type === "solution-preparation") {

        window.location.href =
            "solution-preparation.html";

        return;
    }


    // Molarity
    if (type === "molarity") {

        window.location.href =
            "calculators/molarity.html";

        return;
    }


    // Normality
    if (type === "normality") {

        window.location.href =
            "calculators/normality.html";

        return;
    }


    // Molality
    if (type === "molality") {

        window.location.href =
            "calculators/molality.html";

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


    const molarity =
        mass / molecularWeight / volume;


    result.textContent =
        `Molarity = ${molarity.toFixed(3)} M`;

}


// ----------------------------------------
// Normality Calculator
// ----------------------------------------

function calculateNormality() {

    const mass =
        parseFloat(
            document.getElementById("mass").value
        );

    const equivalentWeight =
        parseFloat(
            document.getElementById("equivalentWeight").value
        );

    const volume =
        parseFloat(
            document.getElementById("volume").value
        );

    const result =
        document.getElementById("normalityResult");


    if (
        isNaN(mass) ||
        isNaN(equivalentWeight) ||
        isNaN(volume) ||
        mass <= 0 ||
        equivalentWeight <= 0 ||
        volume <= 0
    ) {

        result.textContent =
            "Please enter valid values.";

        return;
    }


    const normality =
        mass / equivalentWeight / volume;


    result.textContent =
        `Normality = ${normality.toFixed(3)} N`;

}


// ----------------------------------------
// Molality Calculator
// ----------------------------------------

function calculateMolality() {

    const soluteMass =
        parseFloat(
            document.getElementById("soluteMass").value
        );

    const molecularWeight =
        parseFloat(
            document.getElementById("molecularWeight").value
        );

    const solventMass =
        parseFloat(
            document.getElementById("solventMass").value
        );

    const result =
        document.getElementById("molalityResult");


    if (
        isNaN(soluteMass) ||
        isNaN(molecularWeight) ||
        isNaN(solventMass) ||
        soluteMass <= 0 ||
        molecularWeight <= 0 ||
        solventMass <= 0
    ) {

        result.textContent =
            "Please enter valid values.";

        return;
    }


    // Convert solvent mass from grams to kilograms

    const solventMassKg =
        solventMass / 1000;


    // Calculate moles of solute

    const moles =
        soluteMass / molecularWeight;


    // Molality = moles of solute / kg of solvent

    const molality =
        moles / solventMassKg;


    result.textContent =
        `Molality = ${molality.toFixed(3)} m`;

}


// ----------------------------------------
// Back to Solution Preparation
// ----------------------------------------

function goToSolutionPreparation() {

    window.location.href =
        "../solution-preparation.html";

}


// ----------------------------------------
// Go to Home
// ----------------------------------------

function goHome() {

    const currentPath =
        window.location.pathname;


    if (
        currentPath.includes("/calculators/")
    ) {

        window.location.href =
            "../index.html";

        return;
    }


    window.location.href =
        "index.html";

}
