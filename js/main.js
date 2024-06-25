/*const nav = document.querySelector("#Nav");
const abrir = document.querySelector("#Abrir");
const cerrar = document.querySelector("#Cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");

})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    
})*/

const nav = document.querySelector("#Nav");
const abrir = document.querySelector("#Abrir");
const cerrar = document.querySelector("#Cerrar");
const body = document.body;

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    body.classList.add("menu-abierto");
    abrir.style.display = 'none';
    cerrar.style.display = 'block';
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    body.classList.remove("menu-abierto");
    abrir.style.display = 'block';
    cerrar.style.display = 'none';
});