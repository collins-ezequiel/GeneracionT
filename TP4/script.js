function calcularJubilacion() {
    const edad = parseInt(document.getElementById("edad").value);
    const genero = document.getElementById("genero").value;
    const resultado = document.getElementById("resultado");

    if (isNaN(edad) || edad <= 0) {
        resultado.textContent = "Por favor, ingrese una edad válida.";
        return;
    }

    if (genero === "f" && edad >= 60) {
        resultado.textContent = "Puede jubilarse (Mujer, 60 años o más).";
    } else if (genero === "m" && edad >= 65) {
        resultado.textContent = "Puede jubilarse (Hombre, 65 años o más).";
    } else {
        resultado.textContent = "No cumple con los requisitos para jubilarse.";
    }
}
