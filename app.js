//LOCALSTORAGE
// SET GUARDAR
// GET
// REMOVE

// let color = "rojo";
// localStorage.setItem("colorFondo", color);
// let colorLS = localStorage.getItem("colorFondo");
// localStorage.removeItem("colorFondo");
// document.write(colorLS);

//ejemplo
const botones = document.querySelectorAll(".boton");
const divPadre = document.querySelector("#padre");

function obtenerColor() {
  let colorPadre = localStorage.getItem("colorDeFondo");
  divPadre.style.background = colorPadre;
}
obtenerColor();

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    divPadre.style.background = boton.value;
  });
});

//COMO PONER COLOR AL PADRE CON LOCALSTORAGE
// const botonAzul = document.querySelector("#botonAzul");
// const botonVerde = document.querySelector("#botonVerde");
// const divPadre = document.querySelector("#padre");

// function obtenerColor() {
//   let colorPadre = localStorage.getItem("colorDeFondo");
//   divPadre.style.background = colorPadre;
// }
// obtenerColor();

// botonAzul.addEventListener("click", () => {
//   let colorBoton = botonAzul.value;
//   divPadre.style.background = colorBoton;
//   localStorage.setItem("colorDeFondo", colorBoton);
// });

// botonVerde.addEventListener("click", () => {
//   let colorBoton = botonVerde.value;
//   divPadre.style.background = colorBoton;
//   localStorage.setItem("colorDeFondo", colorBoton);
// });
