function calculateMolarity() {

    const mass = parseFloat(document.getElementById("mass").value);
    const molecularWeight = parseFloat(
        document.getElementById("molecularWeight").value
    );
    const volume = parseFloat(document.getElementById("volume").value);

    const result = document.getElementById("result");

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

    const molarity = mass / molecularWeight / volume;

    result.textContent = `Molarity = ${molarity.toFixed(3)} M`;
}
