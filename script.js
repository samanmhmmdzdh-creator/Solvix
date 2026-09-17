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


    // Percentage Solutions
    if (type === "percentage") {

        window.location.href =
            "calculators/percentage.html";

        return;
    }


    // Dilution
    if (type === "dilution") {

        window.location.href =
            "calculators/dilution.html";

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


    const solventMassKg =
        solventMass / 1000;


    const moles =
        soluteMass / molecularWeight;


    const molality =
        moles / solventMassKg;


    result.textContent =
        `Molality = ${molality.toFixed(3)} m`;

}


// ----------------------------------------
// Update Percentage Labels
// ----------------------------------------

function updatePercentageLabels() {

    const type =
        document.getElementById("percentageType").value;

    const amountLabel =
        document.getElementById("amountLabel");

    const amountUnit =
        document.getElementById("amountUnit");

    const solutionLabel =
        document.getElementById("solutionLabel");

    const solutionUnit =
        document.getElementById("solutionUnit");


    // % w/v

    if (type === "wv") {

        amountLabel.textContent =
            "Mass of Solute";

        amountUnit.textContent =
            "g";

        solutionLabel.textContent =
            "Volume of Solution";

        solutionUnit.textContent =
            "mL";

        return;
    }


    // % w/w

    if (type === "ww") {

        amountLabel.textContent =
            "Mass of Solute";

        amountUnit.textContent =
            "g";

        solutionLabel.textContent =
            "Mass of Solution";

        solutionUnit.textContent =
            "g";

        return;
    }


    // % v/v

    if (type === "vv") {

        amountLabel.textContent =
            "Volume of Solute";

        amountUnit.textContent =
            "mL";

        solutionLabel.textContent =
            "Volume of Solution";

        solutionUnit.textContent =
            "mL";

        return;
    }

}


// ----------------------------------------
// Percentage Calculator
// ----------------------------------------

function calculatePercentage() {

    const type =
        document.getElementById("percentageType").value;

    const amount =
        parseFloat(
            document.getElementById("amount").value
        );

    const solutionAmount =
        parseFloat(
            document.getElementById("solutionAmount").value
        );

    const result =
        document.getElementById("percentageResult");


    if (
        isNaN(amount) ||
        isNaN(solutionAmount) ||
        amount <= 0 ||
        solutionAmount <= 0
    ) {

        result.textContent =
            "Please enter valid values.";

        return;
    }


    const percentage =
        (amount / solutionAmount) * 100;


    if (type === "wv") {

        result.textContent =
            `% w/v = ${percentage.toFixed(3)} %`;

        return;
    }


    if (type === "ww") {

        result.textContent =
            `% w/w = ${percentage.toFixed(3)} %`;

        return;
    }


    if (type === "vv") {

        result.textContent =
            `% v/v = ${percentage.toFixed(3)} %`;

        return;
    }

}


// ----------------------------------------
// Dilution Calculator
// ----------------------------------------

function calculateDilution() {

    const c1 =
        parseFloat(
            document.getElementById("c1").value
        );

    const v1 =
        parseFloat(
            document.getElementById("v1").value
        );

    const c2 =
        parseFloat(
            document.getElementById("c2").value
        );

    const result =
        document.getElementById("dilutionResult");


    // Validate inputs

    if (
        isNaN(c1) ||
        isNaN(v1) ||
        isNaN(c2) ||
        c1 <= 0 ||
        v1 <= 0 ||
        c2 <= 0
    ) {

        result.textContent =
            "Please enter valid C₁, V₁ and C₂ values.";

        return;
    }


    // C1V1 = C2V2
    //
    // V2 = C1V1 / C2

    const v2 =
        (c1 * v1) / c2;


    // Check for impossible dilution

    if (c2 > c1) {

        result.textContent =
            "Final concentration cannot be higher than initial concentration for a simple dilution.";

        return;
    }


    result.textContent =
        `Final Volume (V₂) = ${v2.toFixed(3)} mL`;

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
