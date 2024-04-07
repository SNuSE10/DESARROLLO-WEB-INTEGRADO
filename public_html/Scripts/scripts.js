// Obtenemos la referencia a la imagen de entrada
const imagen = document.getElementById("imagen-entrada");

// Lista de nombres de archivo de imágenes que deseas mostrar al pasar el mouse
const imagenes = ["CAUSA.png","CAUSA2.png","CAUSA3.png","CAUSA4.png"];
let indiceActual = 0;
let intervalo;

// Función para cambiar la imagen
function cambiarImagen() {
  indiceActual = (indiceActual + 1) % imagenes.length;
  imagen.src = "Imagenes/" + imagenes[indiceActual];
}

// Configuramos un evento para cuando el mouse entre en la imagen
imagen.addEventListener("mouseenter", function () {
  // Cambiamos la imagen actual al entrar
  cambiarImagen();

  // Configuramos un intervalo para cambiar las imágenes cada 2 segundos mientras el mouse permanece en la imagen
  intervalo = setInterval(cambiarImagen, 2000);
});

// Configuramos un evento para cuando el mouse salga de la imagen
imagen.addEventListener("mouseleave", function () {
  // Restablecemos la imagen original
  imagen.src = "Imagenes/CAUSA.png";

  // Limpiamos el intervalo para detener el cambio automático de imágenes
  clearInterval(intervalo);
});


// Obtenemos la referencia a la imagen "CEVICHE"
const imagenCeviche = document.getElementById("imagen-segundos");
const imagenesCeviche = ["CEVICHE.png","CEVICHE2.png","CEVICHE3.png","CEVICHE4.png","CEVICHE5.png"];
let indiceActualCeviche = 0;
let intervaloCeviche;

// Función para cambiar la imagen "CEVICHE"
function cambiarImagenCeviche() {
  indiceActualCeviche = (indiceActualCeviche + 1) % imagenesCeviche.length;
  imagenCeviche.src = "Imagenes/" + imagenesCeviche[indiceActualCeviche];
}

// Configuramos eventos para la imagen "CEVICHE"
imagenCeviche.addEventListener("mouseenter", function () {
  cambiarImagenCeviche();
  intervaloCeviche = setInterval(cambiarImagenCeviche, 2000);
});

imagenCeviche.addEventListener("mouseleave", function () {
  imagenCeviche.src = "Imagenes/CEVICHE.png";
  clearInterval(intervaloCeviche);
});


// Para la imagen "Menu Criollo"
const imagenMenuCriollo = document.getElementById("imagen-menu-criollo");
const imagenesMenuCriollo = ["ACM.png","ACM1.png","ACM2.png","ACM3.png",];
let indiceActualMenuCriollo = 0;
let intervaloMenuCriollo;

function cambiarImagenMenuCriollo() {
  indiceActualMenuCriollo = (indiceActualMenuCriollo + 1) % imagenesMenuCriollo.length;
  imagenMenuCriollo.src = "Imagenes/" + imagenesMenuCriollo[indiceActualMenuCriollo];
}

imagenMenuCriollo.addEventListener("mouseenter", function () {
  cambiarImagenMenuCriollo();
  intervaloMenuCriollo = setInterval(cambiarImagenMenuCriollo, 2000);
});

imagenMenuCriollo.addEventListener("mouseleave", function () {
  imagenMenuCriollo.src = "Imagenes/ACM.png";
  clearInterval(intervaloMenuCriollo);
});

// Para la imagen "Plato Especial"
const imagenPlatoEspecial = document.getElementById("imagen-plato-especial");
const imagenesPlatoEspecial = ["CN.png","CN1.png","CN2.png"];
let indiceActualPlatoEspecial = 0;
let intervaloPlatoEspecial;

function cambiarImagenPlatoEspecial() {
  indiceActualPlatoEspecial = (indiceActualPlatoEspecial + 1) % imagenesPlatoEspecial.length;
  imagenPlatoEspecial.src = "Imagenes/" + imagenesPlatoEspecial[indiceActualPlatoEspecial];
}

imagenPlatoEspecial.addEventListener("mouseenter", function () {
  cambiarImagenPlatoEspecial();
  intervaloPlatoEspecial = setInterval(cambiarImagenPlatoEspecial, 2000);
});

imagenPlatoEspecial.addEventListener("mouseleave", function () {
  imagenPlatoEspecial.src = "Imagenes/CN.png";
  clearInterval(intervaloPlatoEspecial);
});

// Para la imagen "Nuestro Bar"
const imagenNuestroBar = document.getElementById("imagen-nuestro-bar");
const imagenesNuestroBar = ["BAR.png","BAR1.png","BAR2.png","BAR3.png","BAR4.png"];
let indiceActualNuestroBar = 0;
let intervaloNuestroBar;

function cambiarImagenNuestroBar() {
  indiceActualNuestroBar = (indiceActualNuestroBar + 1) % imagenesNuestroBar.length;
  imagenNuestroBar.src = "Imagenes/" + imagenesNuestroBar[indiceActualNuestroBar];
}

imagenNuestroBar.addEventListener("mouseenter", function () {
  cambiarImagenNuestroBar();
  intervaloNuestroBar = setInterval(cambiarImagenNuestroBar, 2000);
});

imagenNuestroBar.addEventListener("mouseleave", function () {
  imagenNuestroBar.src = "Imagenes/BAR.png";
  clearInterval(intervaloNuestroBar);
});

// Obtén una referencia al cuerpo
const body = document.querySelector('body');

// Lista de imágenes de fondo
const fondos = ['fondo.png','fondo1.png', 'fondo2.png', 'fondo3.png','fondo4.png','fondo5.png'];
let indiceFondoActual = 0;

// Función para cambiar el fondo
function cambiarFondo() {
    // Cambia al siguiente fondo
    indiceFondoActual = (indiceFondoActual + 1) % fondos.length;
    const nuevoFondo = fondos[indiceFondoActual];

    // Cambia la imagen de fondo
    body.style.backgroundImage = `url('Imagenes/${nuevoFondo}')`;
}

// Configura un intervalo para cambiar el fondo cada 3 segundos (3000 milisegundos)
setInterval(cambiarFondo, 3000);
