// Tamanhos de fonte
let tamanhoFonte = 16; // tamanho padrão
const max = 24;  // Tamanho máximo
const min = 10;  // Tamanho mínimo

document.addEventListener("DOMContentLoaded", () => {
    const btnAumentar = document.getElementById("aumentarBtn");
    const btnDiminuir = document.getElementById("diminuirBtn");

    btnAumentar.addEventListener("click", () => {
        if (tamanhoFonte < max) {
            tamanhoFonte += 2;
            // Aplica no HTML e em todos os elementos de texto
            document.documentElement.style.fontSize = tamanhoFonte + "px";
            document.querySelectorAll(".opt1 li div").forEach(el => {
                el.style.fontSize = tamanhoFonte + "px";
            });
        }
    });

    btnDiminuir.addEventListener("click", () => {
        if (tamanhoFonte > min) {
            tamanhoFonte -= 2;
            // Aplica no HTML e em todos os elementos de texto
            document.documentElement.style.fontSize = tamanhoFonte + "px";
            document.querySelectorAll(".opt1 li div").forEach(el => {
                el.style.fontSize = tamanhoFonte + "px";
            });
        }
    });
});