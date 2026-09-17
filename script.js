```javascript
// ========================================
// SOLVIX - Main JavaScript
// ========================================


// ========================================
// OPEN CALCULATOR
// ========================================

function openCalculator(type) {

    if (type === "solution-preparation") {
        window.location.href = "solution-preparation.html";
        return;
    }

    if (type === "molarity") {
        window.location.href = "calculators/molarity.html";
        return;
    }

    if (type === "normality") {
        window.location.href = "calculators/normality.html";
        return;
    }

    if (type === "molality") {
        window.location.href = "calculators/molality.html";
        return;
    }

    if (type === "percentage") {
        window.location.href = "calculators/percentage.html";
        return;
    }

    if (type === "dilution") {
        window.location.href = "calculators/dilution.html";
        return;
    }
}


// ========================================
// MOLARITY
// ========================================

function calculateMolarity() {

    var mass =
        parseFloat(document.getElementById("mass").value);

    var molecularWeight =
        parseFloat(document.getElementById("molecularWeight").value);

    var volume =
        parseFloat(document.getElementById("volume").value);

    var result =
        document.getElementById("result");


    if (
        isNaN(mass) ||
        isNaN(molecularWeight) ||
        isNaN(volume) ||
        mass <= 0 ||
        molecularWeight <= 0 ||
        volume <= 0
    ) {

        result.textContent = "Please enter valid values.";
        return;
    }


    var molarity =
        mass / molecularWeight / volume;


    result.textContent =
        "Molarity = " + molarity.toFixed(3) + " M";
}


// ========================================
// NORMALITY
// ========================================

function calculateNormality() {

    var mass =
        parseFloat(document.getElementById("mass").value);

    var equivalentWeight =
        parseFloat(document.getElementById("equivalentWeight").value);

    var volume =
        parseFloat(document.getElementById("volume").value);

    var result =
        document.getElementById("normalityResult");


    if (
        isNaN(mass) ||
        isNaN(equivalentWeight) ||
        isNaN(volume) ||
        mass <= 0 ||
        equivalentWeight <= 0 ||
        volume <= 0
    ) {

        result.textContent = "Please enter valid values.";
        return;
    }


    var normality =
        mass / equivalentWeight / volume;


    result.textContent =
        "Normality = " + normality.toFixed(3) + " N";
}


// ========================================
// MOLALITY
// ========================================

function calculateMolality() {

    var soluteMass =
        parseFloat(document.getElementById("soluteMass").value);

    var molecularWeight =
        parseFloat(document.getElementById("molecularWeight").value);

    var solventMass =
        parseFloat(document.getElementById("solventMass").value);

    var result =
        document.getElementById("molalityResult");


    if (
        isNaN(soluteMass) ||
        isNaN(molecularWeight) ||
        isNaN(solventMass) ||
        soluteMass <= 0 ||
        molecularWeight <= 0 ||
        solventMass <= 0
    ) {

        result.textContent = "Please enter valid values.";
        return;
    }


    var solventMassKg =
        solventMass / 1000;

    var moles =
        soluteMass / molecularWeight;

    var molality =
        moles / solventMassKg;


    result.textContent =
        "Molality = " + molality.toFixed(3) + " m";
}


// ========================================
// PERCENTAGE LABELS
// ========================================

function updatePercentageLabels() {

    var type =
        document.getElementById("percentageType").value;

    var amountLabel =
        document.getElementById("amountLabel");

    var amountUnit =
        document.getElementById("amountUnit");

    var solutionLabel =
        document.getElementById("solutionLabel");

    var solutionUnit =
        document.getElementById("solutionUnit");


    if (type === "wv") {

        amountLabel.textContent = "Mass of Solute";
        amountUnit.textContent = "g";

        solutionLabel.textContent = "Volume of Solution";
        solutionUnit.textContent = "mL";

        return;
    }


    if (type === "ww") {

        amountLabel.textContent = "Mass of Solute";
        amountUnit.textContent = "g";

        solutionLabel.textContent = "Mass of Solution";
        solutionUnit.textContent = "g";

        return;
    }


    if (type === "vv") {

        amountLabel.textContent = "Volume of Solute";
        amountUnit.textContent = "mL";

        solutionLabel.textContent = "Volume of Solution";
        solutionUnit.textContent = "mL";

        return;
    }
}


// ========================================
// PERCENTAGE
// ========================================

function calculatePercentage() {

    var type =
        document.getElementById("percentageType").value;

    var amount =
        parseFloat(document.getElementById("amount").value);

    var solutionAmount =
        parseFloat(document.getElementById("solutionAmount").value);

    var result =
        document.getElementById("percentageResult");


    if (
        isNaN(amount) ||
        isNaN(solutionAmount) ||
        amount <= 0 ||
        solutionAmount <= 0
    ) {

        result.textContent = "Please enter valid values.";
        return;
    }


    var percentage =
        (amount / solutionAmount) * 100;


    if (type === "wv") {

        result.textContent =
            "% w/v = " + percentage.toFixed(3) + " %";

        return;
    }


    if (type === "ww") {

        result.textContent =
            "% w/w = " + percentage.toFixed(3) + " %";

        return;
    }


    if (type === "vv") {

        result.textContent =
            "% v/v = " + percentage.toFixed(3) + " %";

        return;
    }
}


// ========================================
// UPDATE DILUTION FIELDS
// ========================================

function updateDilutionFields() {

    var unknown =
        document.getElementById("dilutionUnknown").value;


    var c1 =
        document.getElementById("c1");

    var v1 =
        document.getElementById("v1");

    var c2 =
        document.getElementById("c2");

    var v2 =
        document.getElementById("v2");


    c1.disabled = false;
    v1.disabled = false;
    c2.disabled = false;
    v2.disabled = false;


    c1.value = "";
    v1.value = "";
    c2.value = "";
    v2.value = "";


    c1.placeholder = "Enter C₁";
    v1.placeholder = "Enter V₁";
    c2.placeholder = "Enter C₂";
    v2.placeholder = "Enter V₂";


    if (unknown === "c1") {

        c1.disabled = true;
        c1.placeholder = "Calculated automatically";

        return;
    }


    if (unknown === "v1") {

        v1.disabled = true;
        v1.placeholder = "Calculated automatically";

        return;
    }


    if (unknown === "c2") {

        c2.disabled = true;
        c2.placeholder = "Calculated automatically";

        return;
    }


    if (unknown === "v2") {

        v2.disabled = true;
        v2.placeholder = "Calculated automatically";

        return;
    }
}


// ========================================
// DILUTION
// ========================================

function calculateDilution() {

    var unknown =
        document.getElementById("dilutionUnknown").value;


    var c1 =
        parseFloat(document.getElementById("c1").value);

    var v1 =
        parseFloat(document.getElementById("v1").value);

    var c2 =
        parseFloat(document.getElementById("c2").value);

    var v2 =
        parseFloat(document.getElementById("v2").value);

    var result =
        document.getElementById("dilutionResult");


    // ------------------------------------
    // C1
    // C1 = C2 × V2 / V1
    // ------------------------------------

    if (unknown === "c1") {

        if (
            isNaN(v1) ||
            isNaN(c2) ||
            isNaN(v2) ||
            v1 <= 0 ||
            c2 <= 0 ||
            v2 <= 0
        ) {

            result.textContent =
                "Please enter valid V₁, C₂ and V₂ values.";

            return;
        }


        var calculatedC1 =
            (c2 * v2) / v1;


        if (calculatedC1 < c2) {

            result.textContent =
                "For a simple dilution, C₁ should not be lower than C₂.";

            return;
        }


        document.getElementById("c1").value =
            calculatedC1;


        result.textContent =
            "Initial Concentration (C₁) = " +
            calculatedC1.toFixed(3);

        return;
    }


    // ------------------------------------
    // V1
    // V1 = C2 × V2 / C1
    // ------------------------------------

    if (unknown === "v1") {

        if (
            isNaN(c1) ||
            isNaN(c2) ||
            isNaN(v2) ||
            c1 <= 0 ||
            c2 <= 0 ||
            v2 <= 0
        ) {

            result.textContent =
                "Please enter valid C₁, C₂ and V₂ values.";

            return;
        }


        if (c2 > c1) {

            result.textContent =
                "Final concentration cannot be higher than initial concentration for a simple dilution.";

            return;
        }


        var calculatedV1 =
            (c2 * v2) / c1;


        document.getElementById("v1").value =
            calculatedV1;


        result.textContent =
            "Initial Volume (V₁) = " +
            calculatedV1.toFixed(3) +
            " mL";

        return;
    }


    // ------------------------------------
    // C2
    // C2 = C1 × V1 / V2
    // ------------------------------------

    if (unknown === "c2") {

        if (
            isNaN(c1) ||
            isNaN(v1) ||
            isNaN(v2) ||
            c1 <= 0 ||
            v1 <= 0 ||
            v2 <= 0
        ) {

            result.textContent =
                "Please enter valid C₁, V₁ and V₂ values.";

            return;
        }


        var calculatedC2 =
            (c1 * v1) / v2;


        if (calculatedC2 > c1) {

            result.textContent =
                "For a simple dilution, C₂ cannot be higher than C₁.";

            return;
        }


        document.getElementById("c2").value =
            calculatedC2;


        result.textContent =
            "Final Concentration (C₂) = " +
            calculatedC2.toFixed(3);

        return;
    }


    // ------------------------------------
    // V2
    // V2 = C1 × V1 / C2
    // ------------------------------------

    if (unknown === "v2") {

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


        if (c2 > c1) {

            result.textContent =
                "Final concentration cannot be higher than initial concentration for a simple dilution.";

            return;
        }


        var calculatedV2 =
            (c1 * v1) / c2;


        document.getElementById("v2").value =
            calculatedV2;


        result.textContent =
            "Final Volume (V₂) = " +
            calculatedV2.toFixed(3) +
            " mL";

        return;
    }
}


// ========================================
// BACK TO SOLUTION PREPARATION
// ========================================

function goToSolutionPreparation() {

    window.location.href =
        "../solution-preparation.html";
}


// ========================================
// GO HOME
// ========================================

function goHome() {

    var currentPath =
        window.location.pathname;


    if (
        currentPath.indexOf("/calculators/") !== -1
    ) {

        window.location.href =
            "../index.html";

        return;
    }


    window.location.href =
        "index.html";
}
```
