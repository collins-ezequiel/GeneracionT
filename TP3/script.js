window.addEventListener('DOMContentLoaded', () => {
    console.log("Aventura iniciada");

    const botones = document.querySelectorAll('.boton');
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            console.log(`Elegiste: ${boton.textContent}`);
        });
    });
});
