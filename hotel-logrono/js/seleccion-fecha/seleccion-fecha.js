let contadorPersonas = document.getElementById("contador-personas");
let botonMenos = document.getElementById("boton-menos");
let botonMas = document.getElementById("boton-mas");

botonMenos.addEventListener("click", (event) => {
  if (contadorPersonas.innerHTML != "0") {
    contadorPersonas.innerHTML = parseInt(contadorPersonas.innerHTML) - 1;
  }
  // Paro la propagación del click a los elementos padres (bubbling)
  // y así no se cierra el dropdown al hacer click en el más o el menos
  event.stopPropagation();
});

botonMas.addEventListener("click", (event) => {
  contadorPersonas.innerHTML = parseInt(contadorPersonas.innerHTML) + 1;
  event.stopPropagation();
});
